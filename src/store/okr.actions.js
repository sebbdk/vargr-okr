import nanoid from 'nanoid';
import { okrActions } from "./okr";
import { userActions } from './user';

export const serialize = function(obj) {
    var str = [];
    for (var p in obj)
      if (obj.hasOwnProperty(p)) {
        str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
      }
    return str.join("&");
  }

export function updateTask(rawTask, replace = false) {
    return async (dispatch, getState) => {
        const originalTask = getState().okr.tasks.filter(t => t.id === rawTask.id);
        const defaultFields = {status: 0, sort: 0, title:'', user: getState().user.id}
        const saveTask = { ...defaultFields, ...rawTask, okrtaskgroup: rawTask.groupId, __v: 0, id: "5d6994b3f236585b2605158f" };

        if(saveTask.okrtaskgroup === undefined || saveTask.okrtaskgroup === -1) {
            delete saveTask.okrtaskgroup
        }

        const task = {
            id: rawTask.id,
            title: rawTask.title,
            status: rawTask.status,
            sort: rawTask.sort,
            groupId: rawTask.groupId
        }

        dispatch({ type: okrActions.updateTask, task, replace });

        const req = await fetch(`https://strapi.sebb.dk/okrtasks/${rawTask.id}`, {
            method: 'put',
            headers: {
                'Authorization': 'Bearer ' + getState().auth.jwt,
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: serialize(saveTask)
        });

        if (req.status !== 200) {
            dispatch({ type: okrActions.updateTask, task: originalTask, replace: true });
            console.error('Update task failed', req)
        }
    }
}

export function addTask(rawTask) {
    return async (dispatch, getState) => {
        const sort = getState().okr.tasks.reduce((acc, curr) => {
                return curr.sort > acc ? curr.sort : acc;
        }, 0) + 1;
        const defaultFields = { order: 0, status: 0, title:'', sort: 0, user: getState().user.id };
        const saveTask = { ...defaultFields, ...rawTask, okrtaskgroup: rawTask.groupId, sort };

        const tempTask = {  ...saveTask, id: nanoid() }

        dispatch({ type: okrActions.addTask, task: tempTask });

        delete saveTask.groupId
        if(saveTask.okrtaskgroup === undefined || saveTask.okrtaskgroup === -1) {
            delete saveTask.okrtaskgroup
        }

        const req = await fetch('https://strapi.sebb.dk/okrtasks', {
            method: 'post',
            headers: {
                'Authorization': 'Bearer ' + getState().auth.jwt,
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: serialize(saveTask)
        });

        const resTask = await req.json();
        const task = {
            id: resTask.id,
            title: resTask.title,
            status: resTask.status,
            groupId: resTask.okrtaskgroup ? resTask.okrtaskgroup.id : undefined,
            sort
        }

        if (req.status === 200) {
            dispatch({ type: okrActions.deleteTask, id: tempTask.id });
            dispatch({ type: okrActions.addTask, task });
        } else {
            console.error('Update task failed', req)
        }
    }
}

export function updateObjective(primaryObjective) {
    return { type: okrActions.updatePrimaryObjective, primaryObjective };
}

export function updateKeyResult(keyResult, index) {
    return { type: okrActions.updateKeyResult, keyResult, index };
}

export function moveTaskTo(taskId, index, groupId) {
    groupId = groupId !== -1 ? groupId:undefined;

    return async (dispatch, getState) => {
        const state = getState();
        const tasks = state.okr.tasks
            .filter(t => t.groupId === groupId)
            .filter(t => t.id !== taskId)
            .sort((t1,t2) => t1.sort < t2.sort ? -1 : 1);


        const task = state.okr.tasks.find(t => t.id === taskId);

        tasks.splice(index, 0, task)
        const beforeVal = tasks[index-1] ? tasks[index-1].sort : tasks[0].sort-1;
        const afterVal  = tasks[index+1] ? tasks[index+1].sort : tasks[tasks.length-1].sort+1;

        const sort = beforeVal + ((afterVal - beforeVal) / 2);

        updateTask({
            ...task,
            sort,
            groupId
        })(dispatch, getState);
    }
}

export function updateListName(title, id) {
    return (dispatch, getState) => {
        updateGroup({ id, title })(dispatch, getState);
    }
}

export function deleteTask(id) {
    return async (dispatch, getState) => {
        const tempTask = getState().okr.tasks.find(t => t.id === id);
        dispatch({ type: okrActions.deleteTask, id });

        const req = await fetch(`https://strapi.sebb.dk/okrtasks/${id}`, {
            method: 'delete',
            headers: { 'Authorization': 'Bearer ' + getState().auth.jwt, }
        });

        if (req.status !== 200) {
            dispatch({ type: okrActions.addTask, task: tempTask });
            console.error('Update task failed', req)
        }
    }
}

export function addGroupBefore(rawGroup, beforeId) {
    return async (dispatch, getState) => {
        const state = getState();
        let sort = 0;
 
        // Figure out sort value
        const beforeGroup = state.okr.taskGroups.find(g => g.id === beforeId);
        if(beforeGroup !== undefined) {
            const groups = state.okr.taskGroups.filter(g => !g.deleted);
            const beforeGroupIndex = groups.indexOf(beforeGroup);
            const postVal = beforeGroup.sort;
            const prevVal = groups[beforeGroupIndex-1] ? groups[beforeGroupIndex-1].sort : postVal-1;
            sort = prevVal + ((postVal - prevVal) / 2);
        }

        const saveGroup = { ...rawGroup, sort, user: getState().user.id };
        const tempGroup = {  ...saveGroup, id: nanoid() }

        dispatch({ type: okrActions.addGroup, group: tempGroup });

        const req = await fetch('https://strapi.sebb.dk/okrtaskgroups', {
            method: 'post',
            headers: {
                'Authorization': 'Bearer ' + getState().auth.jwt,
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: serialize(saveGroup)
        });

        const resGroup = await req.json();
        const group = {
            id: resGroup.id,
            title: resGroup.title,
            sort: resGroup.sort
        }

        if (req.status === 200) {
            dispatch({ type: okrActions.deleteGroup, id: tempGroup.id });
            dispatch({ type: okrActions.addGroup, group });
        } else {
            console.error('add group failed', req)
        }
    }
}

export function closeGroup(id) {
    return async (dispatch, getState) => {
        const state = getState();
        const group = { ...state.okr.taskGroups.find(g => g.id === id), deleted: true };
        updateGroup(group)(dispatch, getState);
    }
}

export function updateGroup(group) {
    return async (dispatch, getState) => {
        const state = getState();
        const originalGroup = state.okr.taskGroups.find(g => g.id === group.id);

        dispatch({ type: okrActions.updateGroup, group})

        const req = await fetch(`https://strapi.sebb.dk/okrtaskgroups/${group.id}`, {
            method: 'put',
            headers: {
                'Authorization': 'Bearer ' + state.auth.jwt,
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: serialize(group)
        });

        if (req.status !== 200) {
            dispatch({ type: okrActions.updateGroup, group: originalGroup, replace: true})
            console.error('add group failed', req);
            return false;
        }

        return true;
    }
}

export function updateState(state) {
    return { type: okrActions.updateState, state};
}

export function synchronizeMe(useCache = true) {
    return async (dispatch, getState) => {
        if (useCache && getState().user.id !== undefined) {
            return;
        }

        const req = await fetch('https://strapi.sebb.dk/users/me', {
            method: 'get',
            headers: {
                'Authorization': 'Bearer ' + getState().auth.jwt
            }
        });

        const res = await req.json();

        const tasks = res.okrtasks.map(i => ({
            id: i._id,
            title: i.title,
            groupId: i.okrtaskgroup,
            status: i.status,
            sort: i.sort
        }));

        const taskGroups = res.okrtaskgroups.filter(g => !g.deleted).map(i => ({
            id: i._id,
            title: i.title,
            deleted: i.deleted,
            sort: i.sort
        }));

        dispatch({ type: userActions.set, state: { id: res._id, username: res.username, email: res.email }});
        dispatch({ type: okrActions.setAll, data: { tasks, taskGroups } });
    }
}

export function synchronizeTasks() {
    return async (dispatch, getState) => {
        await synchronizeMe()(dispatch, getState);

        const res = await (await fetch(`https://strapi.sebb.dk/okrtasks?user=${getState().user.id}`, {
            method: 'get',
            headers: {
                'Authorization': 'Bearer ' + getState().auth.jwt
            }
        })).json();

        const tasks = res.map(i => ({
            id: i._id,
            title: i.title,
            groupId: i.okrtaskgroup ? i.okrtaskgroup._id : undefined,
            status: i.status,
            sort: i.sort
        }));

        dispatch({ type: okrActions.setAll, data: { tasks } });
    }
}

export function synchronizeIfAuthenticated() {
    return async (dispatch, getState) => {
        if(getState().auth.user) {
            synchronizeMe()(dispatch, getState);
        }
    }
}

export const getGroupedTasks = (state) => {
    const groups = state.okr.taskGroups
        .filter(g => g.deleted !== true)
        .map((group) => {
            const tasks = state.okr.tasks
                .filter(task => task.groupId === group.id)
                .sort((ta, tb) => ta.sort > tb.sort ? 1:-1 );
            return { ...group,  tasks}
        });

    const deletedGroupIds = state.okr.taskGroups.filter(g => g.deleted === true).map(g => g.id);

    const backlogTasks = state.okr.tasks
        .filter(t => t.groupId === undefined || deletedGroupIds.indexOf(t.groupId) > -1)
        .sort((ta, tb) => ta.sort > tb.sort ? 1 : -1 );

    groups.push({ title: 'Backlog tasks', tasks: backlogTasks })

    return groups.sort((g1, g2) => g1.sort < g2.sort ? -1 : 1);
}
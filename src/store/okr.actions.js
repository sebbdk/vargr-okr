import { okrActions } from "./okr";

export const serialize = function(obj) {
    var str = [];
    for (var p in obj)
      if (obj.hasOwnProperty(p)) {
        str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
      }
    return str.join("&");
  }

export function updateTask(rawTask) {
    return async (dispatch, getState) => {
        const originalTask = getState().okr.tasks.filter(t => t.id === rawTask.id);
        const defaultFields = {order: 0, status: 0, sort: 0, title:'', user: getState().auth.user._id}
        const saveTask = { ...defaultFields, ...rawTask, group: rawTask.groupId }
        delete saveTask.id;
        delete saveTask.groupId;

        const task = {
            id: rawTask.id,
            title: rawTask.title,
            status: rawTask.status,
            sort: rawTask.sort,
            groupId: rawTask.group
        }

        dispatch({ type: okrActions.updateTask, task });

        const req = await fetch(`https://strapi.sebb.dk/okrtasks/${rawTask.id}`, {
            method: 'put',
            headers: {
                'Authorization': 'Bearer ' + getState().auth.jwt,
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: serialize(saveTask)
        });

        if (req.status !== 200) {
            dispatch({ type: okrActions.updateTask, originalTask });
            console.error('Update task failed', req)
        }
    }
}

export function addTask(rawTask) {
    return async (dispatch, getState) => {
        const sort = getState().okr.tasks.reduce((acc, curr) => {
            return curr.sort > acc ? curr.sort : acc;
        }, 0) + 1;
        const defaultFields = {order: 0, status: 0, title:'', sort: 0, user: getState().auth.user._id};
        const saveTask = { ...defaultFields, ...rawTask, group: rawTask.groupId, sort };

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
            groupId: resTask.group,
            sort
        }

        dispatch({ type: okrActions.addTask, task });
    }
}

export function updateObjective(primaryObjective) {
    return { type: okrActions.updatePrimaryObjective, primaryObjective };
}

export function updateKeyResult(keyResult, index) {
    return { type: okrActions.updateKeyResult, keyResult, index };
}

export function moveTaskTo(taskId, index, groupId) {
    return async (dispatch, getState) => {
        const state = getState();
        const tasks = state.okr.tasks
            .filter(t => t.groupId !== groupId)
            .filter(t => t.id !== taskId)
            .sort((t1,t2) => t1.sort < t2.sort ? -1 : 1);

        const task = state.okr.tasks.find(t => t.id === taskId);

        tasks.splice(index, 0, task)
        const beforeVal = tasks[index-1] ? tasks[index-1].sort : tasks[0].sort-1;
        const afterVal  = tasks[index+1] ? tasks[index+1].sort : tasks[tasks.length-1].sort+1;

        const sort = beforeVal + ((afterVal - beforeVal) / 2);

        updateTask({
            ...task,
            sort
        })(dispatch, getState);
    }
}

export function updateListName(title, id) {
    return { type: okrActions.updateGroupTitle, title, id };
}

export function deleteTask(id) {
    return async (dispatch, getState) => {
        const req = await fetch(`https://strapi.sebb.dk/okrtasks/${id}`, {
            method: 'delete',
            headers: { 'Authorization': 'Bearer ' + getState().auth.jwt, }
        });

        if (req.status === 200) {
            dispatch({ type: okrActions.deleteTask, id });
        } else {
            console.error('Update task failed', req)
        }
    }
}

export function addGroupAfter(group, afterId) {
    console.log(group, afterId)

    return { type: okrActions.addGroupAfter, afterId, group};
}

export function closeGroup(id) {
    return { type: okrActions.closeGroup, id};
}

export function updateState(state) {
    return { type: okrActions.updateState, state};
}

export function getData() {
    return async (dispatch, getState) => {
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
            status: i.status,
            sort: i.sort
        }));

        const taskGroups = res.okrtaskgroups.map(i => ({
            id: i._id,
            title: i.title
        }));

        dispatch({ type: okrActions.setAll, data: { tasks, taskGroups } });
    }
}

export const getGroupedTasks = (state) => {
    const groups = state.okr.taskGroups
        .filter(g => g.deleted !== true)
        .map((group) => {
            const tasks = state.okr.tasks.filter(task => task.groupId === group.id).sort((ta, tb) => ta.sort > tb.sort ? 1:-1 );
            return { ...group,  tasks}
        });

    const backlogTasks = state.okr.tasks
        .filter(t => t.groupId === undefined)
        .sort((ta, tb) => ta.sort > tb.sort ? 1 : -1 );

    groups.push({ title: 'Backlog tasks', tasks: backlogTasks })

    return groups;
}
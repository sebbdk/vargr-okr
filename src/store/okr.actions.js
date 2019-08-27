import { okrActions } from "./okr";

export function updateTask(task) {
	return { type: okrActions.updateTask, task };
}

export function addTask(task) {
    return { type: okrActions.addTask, task };
}

export function updateObjective(primaryObjective) {
    return { type: okrActions.updatePrimaryObjective, primaryObjective };
}

export function updateKeyResult(keyResult, index) {
    return { type: okrActions.updateKeyResult, keyResult, index };
}

export function moveTaskTo(taskId, index, groupId) {
    return { type: okrActions.moveTaskTo, taskId, index, groupId};
}

export function updateListName(title, id) {
    return { type: okrActions.updateGroupTitle, title, id };
}

export function deleteTask(id) {
    return { type: okrActions.deleteTask, id };
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

export const getGroupedTasks = (state) => {
    const groups = state.okr.taskGroups
        .filter(g => g.deleted !== true)
        .map((group) => {
            const tasks = state.okr.tasks.filter(task => task.groupId === group.id).sort((ta, tb) => ta.sort > tb.sort ? 1:-1 );
            return { ...group,  tasks}
        });

    const backlogTasks = state.okr.tasks.filter(t => t.groupId === undefined).sort((ta, tb) => ta.sort > tb.sort ? 1:-1 );

    groups.push({ title: 'Backlog tasks', tasks: backlogTasks })

    return groups;
}
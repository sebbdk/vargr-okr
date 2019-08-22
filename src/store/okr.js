import nanoid from 'nanoid';

export const initialState = {
    primaryObjective: 'Finish projects & improve skillset',
    keyResults: [
        'Complete Math C',
        'Complete 4 projects',
        'Get detailed gold trading data for last 5 years'
    ],
    taskGroups: [
        { title: 'Current sprint!', id: 1 },
        { title: 'Some future sprint!', id: 2 },
    ],
    tasks: [
        { id: 0, title: '[OKR Sys] Add group', groupId: 1, status: 1, enabled: false },
        { id: 1, title: '[OKR Sys] Close group', groupId: 1, status: 1, enabled: false },
        { id: 2, title: '[OKR Sys] Drag tasks', groupId: 1, status: 1, enabled: false },
        { id: 3, title: '[OKR Sys] Drop tasks into different sprint and sort', groupId: 1, status: 0, enabled: false },
        { id: 4, title: '[OKR Sys] Delete tasks', groupId: 1, status: 1, enabled: false },
        { id: 5, title: '[OKR Sys] Add tasks', groupId: 1, status: 1, enabled: false },
        { id: 6, title: '[OKR Sys] Basic state', groupId: 1, status: 1, enabled: false },
        { id: 7, title: '[OKR Sys] Basic UI', groupId: 1, status: 1, enabled: false },
        { id: 8, title: '[OKR Sys] Basic task behavior', groupId: 1, status: 1, enabled: false },
        { id: 9, title: '[OKR Sys] Save state to localstorage', groupId: 1, status: 1, enabled: false },

        { id: 10, title: 'Sign up for Math C', groupId: 2, status: 0, enabled: false },
        { id: 11, title: 'Read up on first math module', groupId: 2, status: 0, enabled: false },
        { id: 12, title: 'GBZ audio wiring', groupId: 2, status: 0, enabled: false },
        { id: 13, title: 'Gift for the lady', groupId: 2, status: 1, enabled: false },

        { id: 14, title: 'some task ÆØÅ', groupId: undefined, status: 0, enabled: false },
        { id: 15, title: 'some task ÆØÅ', groupId: undefined, status: 0, enabled: false },
    ]
}

export const getGroupedTasks = (state) => {
    const groups = state.okr.taskGroups.map((group) => {
        const tasks = state.okr.tasks.filter(task => task.groupId === group.id);
        return { ...group,  tasks}
    });

    const backlogTasks = state.okr.tasks.filter(t => t.groupId === undefined);

    groups.push({ title: 'Backlog tasks', id: -1, tasks: backlogTasks })

    return groups;
}

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
    console.log('abc', id)
    return { type: okrActions.closeGroup, id};
}

export const okrActions = {
    updateTask: Symbol('Update task'),
    addTask: Symbol('Add task'),
    updatePrimaryObjective: Symbol('Update primary objective'),
    updateKeyResult: Symbol('Update key result'),
    updateGroupTitle: Symbol('Update group title'),
    deleteTask: Symbol('Delete task'),
    addGroupAfter: Symbol('Add group after'),
    closeGroup: Symbol('close group')
}

export const okr = (state = { ...initialState }, action) => {
    switch(action.type) {
        case okrActions.closeGroup: {
            const tasks = state.tasks.map(t => t.groupId !== action.id ? t : {...t, groupId: undefined})
            const taskGroups = state.taskGroups.filter(g => g.id !== action.id)

            //console.log(tasks)

            return { ...state, taskGroups, tasks }
        }
        case okrActions.updateGroupTitle: {
            const taskGroups = state.taskGroups.map(g => {
                return g.id === action.id ? { ...g, title: action.title }:g;
            });

            return {
                ...state,
                taskGroups
            }
        }
        case okrActions.updateKeyResult: {
            const keyResults = [ ...state.keyResults ];
            keyResults[action.index] = action.keyResult;
            return {
                ...state,
                keyResults
            }
        }
        case okrActions.addGroupAfter: {
            const afterGroup = state.taskGroups.find(g => g.id === action.afterId);
            const afterIndex = state.taskGroups.indexOf(afterGroup);
            const newGroup = { ...action.group, id: nanoid() };

            const newGroups = [ ...state.taskGroups ]
            newGroups.splice(afterIndex+1, 0, newGroup);

            return {
                ...state,
                taskGroups: newGroups
            }
        }
        case okrActions.updatePrimaryObjective: {
            return {
                ...state,
                primaryObjective: action.primaryObjective
            }
        }
        case okrActions.deleteTask: {
            return {
                ...state,
                tasks: state.tasks.filter(t => t.id !== action.id)
            }
        }
        case okrActions.updateTask: {
            const tasks = state.tasks.map(task => task.id === action.task.id ? action.task : task);

            return {
                ...state,
                tasks
            }
        }
        case okrActions.addTask: {
            const tasks = [
                ...state.tasks,
                {
                    groupId: undefined,
                    status: 0,
                    ...action.task,
                    id: nanoid()
                }
            ];

            return {
                ...state,
                tasks
            }
        }
        default:{
            return state;
        }
    }
}
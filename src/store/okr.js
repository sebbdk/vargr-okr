export const initialState = {
    primaryObjective: 'Finish projects & improve skillset',
    keyResults: [
        'Complete Math C',
        'Complete 4 projects',
        'Get detailed gold trading data for last 5 years'
    ],
    taskGroups: [
        { title: 'Backlog', id: 9999999 },
        { title: 'Some future sprint!', id: 1 },
        { title: 'Current sprint!', id: 0 }
    ],
    tasks: [
        { id: 0, title: '[OKR Sys] Add group', groupId: 0, status: 0 },
        { id: 1, title: '[OKR Sys] Close group', groupId: 0, status: 0 },
        { id: 2, title: '[OKR Sys] Move tasks', groupId: 0, status: 0 },
        { id: 3, title: '[OKR Sys] Save state to localstorage', groupId: 0, status: 0 },
        { id: 4, title: '[OKR Sys] Save state to API', groupId: 0, status: 0 },

        { id: 5, title: 'Sign up for Math C', groupId: 1, status: 0 },
        { id: 6, title: 'Read up on first math module', groupId: 1, status: 0 },
        { id: 6, title: 'GBZ audio wiring', groupId: 1, status: 0 },
        { id: 6, title: 'Gift for the lady', groupId: 1, status: 0 },

        { id: 7, title: 'some task ÆØÅ', groupId: -1, status: 0 },
        { id: 8, title: 'some task ÆØÅ', groupId: -1, status: 0 },
    ]
}

export const getGroupedTasks = (state) => {
    const groups = state.okr.taskGroups.map((group) => {
        const tasks = state.okr.tasks.filter(task => task.groupId === group.id);
        return { ...group,  tasks}
    });

    return groups.sort((groupA, groupB) => groupA.id < groupB.id ? -1:1);
}

export function updateTask(task) {
	return { type: okrActions.updateTask, task };
}

export function addTask(task) {
    return { type: okrActions.addTask, task };
}

export function updateObjective(primaryObjective) {
    return { type: okrActions.addTask, primaryObjective };
}

export function updateKeyResult(keyResult, index) {
    return { type: okrActions.updateKeyResult, keyResult, index };
}

export function updateListName(title, id) {
    return { type: okrActions.updateGroupTitle, title, id };
}

export const okrActions = {
    updateTask: Symbol('Update task'),
    addTask: Symbol('Add task'),
    updatePrimaryObjective: Symbol('Update primary objective'),
    updateKeyResult: Symbol('Update key result'),
    updateGroupTitle: Symbol('Update group title')
}

export const okr = (state = { ...initialState }, action) => {
    switch(action.type) {
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
        case okrActions.updatePrimaryObjective: {
            return {
                ...state,
                primaryObjective: action.primaryObjective
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
                    groupId: -1,
                    status: 0,
                    ...action.task,
                    id: state.tasks.length
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
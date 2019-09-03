import nanoid from 'nanoid';

export const initialState = {
    primaryObjective: 'Finish projects & improve skillset',
    keyResults: [
        'Complete Math C',
        'Complete 4 projects',
        'Get detailed gold trading data for last 5 years'
    ],
    taskGroups: [
        { title: 'Current sprint!', id: 1, sort: 0 },
        { title: 'Some future sprint!', id: 2, sort: 1 }
    ],
    tasks: [
        // add sort row...
        { id: nanoid(), sort: 1, title: '[OKR Sys] Add group', groupId: 1, status: 1, enabled: false },
        { id: nanoid(), sort: 2, title: '[OKR Sys] Close group', groupId: 1, status: 1, enabled: false },
        { id: nanoid(), sort: 3, title: '[OKR Sys] Drag tasks', groupId: 1, status: 1, enabled: false },
        { id: nanoid(), sort: 4, title: '[OKR Sys] Drop tasks into different sprint and sort', groupId: 1, status: 0, enabled: false },
        { id: nanoid(), sort: 5, title: '[OKR Sys] Delete tasks', groupId: 1, status: 1, enabled: false },
        { id: nanoid(), sort: 6, title: '[OKR Sys] Add tasks', groupId: 1, status: 1, enabled: false },
        { id: nanoid(), sort: 7, title: '[OKR Sys] Basic state', groupId: 1, status: 1, enabled: false },
        { id: nanoid(), sort: 8, title: '[OKR Sys] Basic UI', groupId: 1, status: 1, enabled: false },
        { id: nanoid(), sort: 9, title: '[OKR Sys] Basic task behavior', groupId: 1, status: 1, enabled: false },
        { id: nanoid(), sort: 10, title: '[OKR Sys] Save state to localstorage', groupId: 1, status: 1, enabled: false },
        { id: nanoid(), sort: 11, title: '[OKR Sys] Deploy to Github page', groupId: 1, status: 1, enabled: false },

        { id: nanoid(), sort: 12, title: 'Sign up for Math C', groupId: 2, status: 0, enabled: false },
        { id: nanoid(), sort: 13, title: 'Read up on first math module', groupId: 2, status: 0, enabled: false },
        { id: nanoid(), sort: 14, title: 'GBZ audio wiring', groupId: 2, status: 0, enabled: false },
        { id: nanoid(), sort: 15, title: 'Gift for the lady', groupId: 2, status: 1, enabled: false },

        { id: nanoid(), sort: 16, title: 'some task ÆØÅ', groupId: undefined, status: 0, enabled: false },
        { id: nanoid(), sort: 17, title: 'some task ÆØÅ', groupId: undefined, status: 0, enabled: false },
    ]
}

export const okrActions = {
    updateTask: Symbol('Update task'),
    addTask: Symbol('Add task'),
    updatePrimaryObjective: Symbol('Update primary objective'),
    updateKeyResult: Symbol('Update key result'),
    updateGroup: Symbol('Update group'),
    deleteTask: Symbol('Delete task'),
    deleteGroup: Symbol('Delete group'),
    addGroup: Symbol('Add group'),
    updateState: Symbol('update state'),
    setAll: Symbol('set tasks'),
}

export const okr = (state = { ...initialState }, action) => {
    switch(action.type) {
        case okrActions.setAll: {
            return {
                ...state,
                ...action.data
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
        case okrActions.updateGroup: {
            const taskGroups = state.taskGroups.map(g => {
                if (g.id === action.group.id) {
                    if (action.replace === true) {
                        return action.group
                    } else {
                        return {...g, ...action.group};
                    }
                }

                return g;
            });

            return {
                ...state,
                taskGroups
            }
        }
        case okrActions.addGroup: {
            return {
                ...state,
                taskGroups: [
                    ...state.taskGroups,
                    {
                        id: action.group.id ? action.group.id : nanoid(),
                        ...action.group
                    }
                ]
            }
        }
        case okrActions.deleteGroup: {
            return {
                ...state,
                taskGroups: state.taskGroups.filter(g => g.id !== action.id)
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
        case okrActions.updateState: {
            return {
                ...state,
                ...action.state
            }
        }
        case okrActions.updateTask: {
            const tasks = state.tasks.map(t => {
                if (t.id === action.task.id) {
                    if (action.replace === true) {
                        return action.task
                    } else {
                        return {...t, ...action.task};
                    }
                }

                return t;
            });

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
                    id: action.task.id ? action.task.id : nanoid(),
                    sort: state.tasks.reduce((acc,curr)=> curr.sort > acc ? curr.sort:acc, 0)+1
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
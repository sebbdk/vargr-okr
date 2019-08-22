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
        { id: nanoid(), title: '[OKR Sys] Add group', groupId: 1, status: 1, enabled: false },
        { id: nanoid(), title: '[OKR Sys] Close group', groupId: 1, status: 1, enabled: false },
        { id: nanoid(), title: '[OKR Sys] Drag tasks', groupId: 1, status: 1, enabled: false },
        { id: nanoid(), title: '[OKR Sys] Drop tasks into different sprint and sort', groupId: 1, status: 0, enabled: false },
        { id: nanoid(), title: '[OKR Sys] Delete tasks', groupId: 1, status: 1, enabled: false },
        { id: nanoid(), title: '[OKR Sys] Add tasks', groupId: 1, status: 1, enabled: false },
        { id: nanoid(), title: '[OKR Sys] Basic state', groupId: 1, status: 1, enabled: false },
        { id: nanoid(), title: '[OKR Sys] Basic UI', groupId: 1, status: 1, enabled: false },
        { id: nanoid(), title: '[OKR Sys] Basic task behavior', groupId: 1, status: 1, enabled: false },
        { id: nanoid(), title: '[OKR Sys] Save state to localstorage', groupId: 1, status: 1, enabled: false },
        { id: nanoid(), title: '[OKR Sys] Deploy to Github page', groupId: 1, status: 1, enabled: false },

        { id: nanoid(), title: 'Sign up for Math C', groupId: 2, status: 0, enabled: false },
        { id: nanoid(), title: 'Read up on first math module', groupId: 2, status: 0, enabled: false },
        { id: nanoid(), title: 'GBZ audio wiring', groupId: 2, status: 0, enabled: false },
        { id: nanoid(), title: 'Gift for the lady', groupId: 2, status: 1, enabled: false },

        { id: nanoid(), title: 'some task ÆØÅ', groupId: undefined, status: 0, enabled: false },
        { id: nanoid(), title: 'some task ÆØÅ', groupId: undefined, status: 0, enabled: false },
    ]
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
            const tasks = state.tasks.map(t => {
                return t.groupId !== action.id || t.status === 1 ? t : {...t, groupId: undefined}
            })
            const taskGroups = state.taskGroups.map(g => g.id !== action.id ? g : {...g, deleted: true})

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
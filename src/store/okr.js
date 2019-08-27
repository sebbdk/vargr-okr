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
        { title: 'Some future sprint!', id: 2 }
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
    updateGroupTitle: Symbol('Update group title'),
    deleteTask: Symbol('Delete task'),
    addGroupAfter: Symbol('Add group after'),
    closeGroup: Symbol('close group'),
    moveTaskTo: Symbol('move task to'),
    updateState: Symbol('update state'),
}

export const okr = (state = { ...initialState }, action) => {
    switch(action.type) {
        case okrActions.moveTaskTo: {
            const moveTask = { ...state.tasks.find(t => t.id === action.taskId), groupId: action.groupId === -1 ? undefined : action.groupId };
            const allTasks = state.tasks.filter(t => t.id !== moveTask.id);
            const otherTasks = allTasks.filter(t => t.groupId !== action.groupId);
            let groupTasks = allTasks.filter(t => t.groupId === action.groupId).sort((t1, t2) => t1.sort < t2.sort ? -1 : 1);

            groupTasks.splice(action.index, 0, moveTask);
            groupTasks = groupTasks.map((t,index) => ({...t, sort: index}));

            return {
                ...state,
                tasks: [ ...otherTasks, ...groupTasks ]
            };
        }
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
        case okrActions.updateState: {
            return {
                ...state,
                ...action.state
            }
        }
        case okrActions.updateTask: {
            const tasks = state.tasks.map(task => task.id === action.task.id ? {...task, ...action.task} : task);

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
                    id: nanoid(),
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
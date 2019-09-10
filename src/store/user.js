export const initialState = {
    id: undefined,
    username: undefined,
    email: undefined
}

export const userActions = {
    set: Symbol('set user')
}

export function updateUser(state) {
    return { type: userActions.set, state};
}

export const user = (state = { ...initialState }, action) => {
    switch(action.type) {
        case userActions.set: {
            return {
                ...state,
                ...action.state
            }
        }
        default:{
            return state;
        }
    }
}
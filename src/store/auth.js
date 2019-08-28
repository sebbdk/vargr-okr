export const authActions = {
    UPDATE: Symbol('update')
}

export function login(username, password) {
    return async (dispatch, getState) => {
        const req = await fetch('https://strapi.sebb.dk/auth/local', {
            method: 'post',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: `identifier=${username}&password=${password}`
        });

        const res = await req.json();

        dispatch({
            type: authActions.UPDATE,
            data: {
                ...res
            }
        });
    }
}

export const initialState = {}

export const auth = (state = { ...initialState }, action) => {
    switch(action.type) {
        case authActions.UPDATE: {
            return {
                ...state,
                ...action.data
            };
        }
        default:
            return state;
    }

}
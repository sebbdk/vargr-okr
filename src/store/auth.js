import { synchronizeMe, synchronizeTasks } from "./okr.actions";

export const authActions = {
    set: Symbol('set auth state')
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
            type: authActions.set,
            state: {
                jwt: res.jwt
            }
        });
    }
}

export function loginAndSync(username, password) {
    return async (dispatch, getState) => {
        await login(username, password)(dispatch, getState);
        await synchronizeMe()(dispatch, getState);
        await synchronizeTasks()(dispatch, getState);
    }
}

export const initialState = {}

export const auth = (state = { ...initialState }, action) => {
    switch(action.type) {
        case authActions.set: {
            return {
                ...state,
                ...action.state
            };
        }
        default:
            return state;
    }

}
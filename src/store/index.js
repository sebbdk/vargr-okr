import { combineReducers, createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { okr } from './okr';
import { auth } from './auth';
import { synchronizeIfAuthenticated } from './okr.actions';

export const rootReducer = combineReducers({
    okr,
    auth
})

const composeEnhancers = composeWithDevTools({
    serialize: true
});

function getLocalStorageState() {
    const ls = localStorage.getItem('okr');
    return ls ? JSON.parse(ls) : {};
}

export const store = createStore(rootReducer, getLocalStorageState(), composeEnhancers(
    applyMiddleware(thunk),
    // other store enhancers if any
));

store.subscribe(state => {
    localStorage.setItem('okr', JSON.stringify(store.getState()));
});

store.dispatch(synchronizeIfAuthenticated());

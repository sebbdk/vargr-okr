import { combineReducers, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import { okr } from './okr';

export const rootReducer = combineReducers({
    okr
})

const composeEnhancers = composeWithDevTools({
    serialize: true
});

function getLocalStorageState() {
    const ls = localStorage.getItem('okr');
    return ls ? JSON.parse(ls) : {};
}

export const store = createStore(rootReducer, getLocalStorageState(), composeEnhancers(
    //applyMiddleware(...middleware),
    // other store enhancers if any
));

store.subscribe(state => {
    localStorage.setItem('okr', JSON.stringify(store.getState()));
});

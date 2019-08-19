import { combineReducers, createStore } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension';
import { okr } from './okr';

export const rootReducer = combineReducers({
    okr
})

const composeEnhancers = composeWithDevTools({
    serialize: true
});

export const store = createStore(rootReducer, composeEnhancers(
    //applyMiddleware(...middleware),
    // other store enhancers if any
));
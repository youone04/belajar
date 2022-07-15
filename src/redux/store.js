import { applyMiddleware , createStore , combineReducers } from  'redux';
import reducer from './reducer';
import thunk from 'redux-thunk';

const reducers = combineReducers({
    reducer
})

export const store = createStore(reducers , applyMiddleware(thunk));


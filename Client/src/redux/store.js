import {applyMiddleware, createStore} from 'redux';
import thunk from 'redux-thunk';
import {reducer} from './reducers';

export let store = createStore(reducer,applyMiddleware(thunk));
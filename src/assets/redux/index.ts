import { combineReducers, createStore } from 'redux';
import { layoutReducer } from './reducer-list';

const rootReducer = combineReducers({
  layout: layoutReducer,
});

export const store = createStore(rootReducer);

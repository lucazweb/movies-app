import { combineReducers } from 'redux';
import moviesReducer from './movies';
import uiReducer from './user-interface';

export default combineReducers({
  movies: moviesReducer,
  ui: uiReducer,
});

import { combineReducers } from 'redux';
import { moviesListReducer } from './movieListReducers';

const rootReducer = combineReducers({
  movies: moviesListReducer
});

export default rootReducer;
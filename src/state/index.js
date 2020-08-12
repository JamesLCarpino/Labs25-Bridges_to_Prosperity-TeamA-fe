import { combineReducers } from 'redux';
import { counter } from './reducers/counter';
import { searchLocation } from './reducers/searchLocation';

// Using combine reducers to break up reducers into different files
export default combineReducers({
  counter,
  searchLocation,
});

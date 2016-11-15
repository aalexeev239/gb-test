import {routerReducer as routing} from 'react-router-redux';
import {combineReducers} from 'redux';
import todos from './todos';
import questions from './questions';
import challenge from './challenge';
import countdown from './countdown';


export default combineReducers({
  routing,
  todos,
  questions,
  challenge,
  countdown
})

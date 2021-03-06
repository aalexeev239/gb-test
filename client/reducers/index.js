import {routerReducer as routing} from 'react-router-redux';
import {combineReducers} from 'redux';
import questions from './questions';
import challenge from './challenge';
import countdown from './countdown';
import alert from './alert';


export default combineReducers({
  routing,
  questions,
  challenge,
  countdown,
  alert
})

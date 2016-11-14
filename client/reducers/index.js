import {routerReducer as routing} from 'react-router-redux'
import {combineReducers} from 'redux'
import todos from './todos'
import questions from './questions'
import challenge from './challenge';


export default combineReducers({
  routing,
  todos,
  questions,
  challenge
})

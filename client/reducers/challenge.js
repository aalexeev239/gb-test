import {CHALLENGE_ON, START, PROGRESS, FINISH} from '../constants/actions';

import {handleActions} from 'redux-actions'

const initialState = CHALLENGE_ON + START;

let actions = {};

actions[CHALLENGE_ON + PROGRESS] = ()=> {
  return CHALLENGE_ON + PROGRESS;
};

actions[CHALLENGE_ON + FINISH] = ()=> {
  return CHALLENGE_ON + FINISH;
};


export default handleActions(actions, initialState);

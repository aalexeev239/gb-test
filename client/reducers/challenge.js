import {
  CHALLENGE_ON,
  START_CHALLENGE,
  START,
  PROGRESS,
  FINISH,
  GO_NEXT
} from '../constants/actions';

import {handleActions} from 'redux-actions'

const initialState = {
  status: CHALLENGE_ON + START,
  total: 0,
  current: null,
  answers: []
}

let actions = {};

actions[START_CHALLENGE] = (state, action)=> {
  return {
    ...state,
    status: CHALLENGE_ON + PROGRESS,
    current: 0,
    total: action.payload
  }
};

actions[CHALLENGE_ON + FINISH] = ()=> {
  return CHALLENGE_ON + FINISH;
};


actions[GO_NEXT] = (state, action)=> {
  console.log('--- state', state);
  return {
    ...state,
    current: state.current + 1
  };
};


export default handleActions(actions, initialState);

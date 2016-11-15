import {
  COUNTDOWN,
  TICK,
  START,
  STOP
} from '../constants/actions';

import {handleActions} from 'redux-actions'
import {config} from '../config';

const {countdown_time} = config;

const initialState = {
  time: countdown_time,
  isOn: false,
  offset: 0
};

let actions = {};

actions[COUNTDOWN + START] = (state, action)=> {
  const offset = action.payload.offset;
  return {
    ...initialState,
    isOn: true,
    offset
  }
};

actions[COUNTDOWN + STOP] = (state, action)=> {
  const offset = action.payload.offset;
  console.log('--- state', state);
  return {
    isOn: false,
    time: state.time
  }
};

actions[COUNTDOWN + TICK] = (state, action)=> {
  const offset = action.payload.offset;

  return {
    ...state,
    time: state.time + (action.payload.time - state.offset),
    offset: action.payload.time
  }
};

export default handleActions(actions, initialState);

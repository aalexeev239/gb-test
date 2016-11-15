import {handleActions} from 'redux-actions';

import {
  COUNTDOWN,
  TICK,
  START,
  STOP
} from '../constants/actions';

import {config} from '../config';

const {countdown_time} = config;

export default handleActions({
  [COUNTDOWN + START]: (state, {payload: {offset}}) => ({
    ...state,
    isOn: true,
    offset
  }),

  [COUNTDOWN + STOP]: ({time}) => ({
    isOn: false,
    time
  }),

  [COUNTDOWN + TICK]: (state, {payload: {offset, time}}) => ({
    ...state,
    time: state.time + (time - state.offset),
    offset: time
  })
}, {
  // initial state
  time: countdown_time,
  isOn: false,
  offset: 0
});

import {handleActions} from 'redux-actions';

import {
  COUNTDOWN,
  TICK,
  START,
  STOP,
  PAUSE,
  RESUME
} from '../constants/actions';

import {config} from '../config';

const {countdown_time} = config;

export default handleActions({
    [COUNTDOWN + START]: (state, {payload: {offset}}) => ({
      time: countdown_time,
      isOn: true,
      offset
    }),

    [COUNTDOWN + STOP]: (state) => ({
      ...state,
      isOn: false
    }),

    [COUNTDOWN + PAUSE]: (state, {payload: {time}}) => ({
      ...state,
      isOn: false
    }),

    [COUNTDOWN + RESUME]: (state, {payload: {offset}}) => ({
      ...state,
      isOn: true,
      offset
    }),

    [COUNTDOWN + TICK]: (state, {payload}) => ({
      ...state,
      time: Math.max(countdown_time + state.offset - payload.time, 0),
    })
  },
  {
    // initial state
    time: countdown_time,
    isOn: false,
    offset: 0
  }
);

import {handleActions} from 'redux-actions';

import {
  SHOW_ALERT,
  HIDE_ALERT
} from '../constants/actions';

export default handleActions({
    [SHOW_ALERT]: (state, {payload: {text}}) => ({
      text,
      isShown: true
    }),

    [HIDE_ALERT]: (state) => ({
      ...state,
      isShown: false
    })
  },
  {
    // initial state
    text: '',
    isShown: false
  }
);

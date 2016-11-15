import {handleActions} from 'redux-actions';

import {LOAD_ALL_QUESTIONS, SUCCESS, START, START_CHALLENGE} from '../constants/actions';

export default handleActions({
  [LOAD_ALL_QUESTIONS + START]: (state)=> ({
    ...state,
    loading: true
  }),

  [LOAD_ALL_QUESTIONS + SUCCESS]: (state, {payload: {items}})=> ({
    ...state,
    loading: false,
    loaded: true,
    items,
    total: items.length
  }),

  [START_CHALLENGE]: (state)=> ({
    ...state,
    current: 0
  })
}, {
  // initial state
  loading: false,
  loaded: false,
  items: []
});

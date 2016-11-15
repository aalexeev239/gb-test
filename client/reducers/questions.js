import {LOAD_ALL_QUESTIONS, SUCCESS, START, START_CHALLENGE, GO_NEXT} from '../constants/actions';

import {handleActions} from 'redux-actions'

const initialState = {
  loading: false,
  loaded: false,
  items: []
};

let actions = {};

actions[LOAD_ALL_QUESTIONS + START] = (state, action)=> {
  return {
    ...state,
    loading: true
  };
};

actions[LOAD_ALL_QUESTIONS + SUCCESS] = (state, action)=> {
  return {
    ...state,
    loading: false,
    loaded: true,
    items: action.payload.items.concat([]),
    total: action.payload.items.length
  };
};

actions[START_CHALLENGE] = (state, action)=> {
  return {
    ...state,
    current: 0
  };
};

export default handleActions(actions, initialState);

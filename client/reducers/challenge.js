import {
  CHALLENGE_ON,
  START_CHALLENGE,
  FINISH_CHALLENGE,
  START,
  PROGRESS,
  FINISH,
  GO_NEXT,
  SELECT_ANSWER,
  VALIDATION,
  SUCCESS,
  FAIL
} from '../constants/actions';

import {handleActions} from 'redux-actions'

const initialState = {
  status: CHALLENGE_ON + START,
  total: 0,
  current: 0,
  canGoNext: false,
  validating: false,
  validated: false,
  validationFail: false,
  result: {},
  answers: []
};

let actions = {};

actions[START_CHALLENGE] = (state, action)=> {

  return Object.assign({}, initialState, {
    total: action.payload,
    status: CHALLENGE_ON + PROGRESS
  })
};

actions[FINISH_CHALLENGE] = (state)=> {
  return {
    ...state,
    status: CHALLENGE_ON + FINISH
  };
};


actions[GO_NEXT] = (state)=> {
  return {
    ...state,
    canGoNext: false,
    current: state.current + 1
  };
};

actions[SELECT_ANSWER] = (state, action)=> {
  const {current, question_id, answer_id} = action.payload;
  const answer = {
    answer_id,
    question_id
  };
  let answers = state.answers.slice();
  answers[current] = answer;
  return {
    ...state,
    canGoNext: true,
    answers
  };
};

actions[VALIDATION + START] = (state, action)=> {
  return {
    ...state,
    validating: true,
    validated: false
  };
};

actions[VALIDATION + SUCCESS] = (state, action)=> {
  return {
    ...state,
    validating: false,
    validated: true,
    result: Object.assign({}, action.payload.result)
  };
};

actions[VALIDATION + FAIL] = (state)=> {
  return {
    ...state,
    validating: false,
    validated: false,
    validationFail: true
  };
};

export default handleActions(actions, initialState);

import {handleActions} from 'redux-actions';

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

export default handleActions({
  [START_CHALLENGE]: (state, {payload}) => ({
    ...state,
    total: payload,
    status: CHALLENGE_ON + PROGRESS
  }),

  [FINISH_CHALLENGE]: (state) => ({
    ...state,
    status: CHALLENGE_ON + FINISH
  }),

  [GO_NEXT]: (state) => ({
    ...state,
    canGoNext: false,
    current: state.current + 1
  }),

  [SELECT_ANSWER]: (state, {payload: {current, question_id, answer_id}}) => {
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
    }
  },

  [VALIDATION + START]: (state) => ({
    ...state,
    validating: true,
    validated: false
  }),

  [VALIDATION + SUCCESS]: (state, {payload: {result}}) => ({
    ...state,
    validating: false,
    validated: true,
    result
  }),

  [VALIDATION + FAIL]: (state)=> ({
    ...state,
    validating: false,
    validated: false,
    validationFail: true
  })
}, {
  // initial state
  status: CHALLENGE_ON + START,
  total: 0,
  current: 0,
  canGoNext: false,
  validating: false,
  validated: false,
  validationFail: false,
  result: {},
  answers: []
});

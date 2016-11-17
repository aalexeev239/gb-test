import {createAction} from 'redux-actions';

import {
  LOAD_ALL_QUESTIONS,
  START_CHALLENGE,
  GO_NEXT,
  SELECT_ANSWER,
  SHOW_ALERT,
  COUNTDOWN,
  PAUSE
} from '../constants/actions';

export const loadAllQuestions = createAction(LOAD_ALL_QUESTIONS);
export const startChallenge = createAction(START_CHALLENGE);
export const goNext = createAction(GO_NEXT);
export const selectAnswer = createAction(SELECT_ANSWER);
export const showAlert = createAction(SHOW_ALERT);
export const pauseCoundown = createAction(COUNTDOWN + PAUSE);

import {createAction} from 'redux-actions';

import {LOAD_ALL_QUESTIONS} from '../constants/actions';


export const loadAllQuestions = createAction(LOAD_ALL_QUESTIONS, () => {
  return {
    url: '/assets/fixtures/questions.json'
  }
});


import {LOAD_ALL_QUESTIONS, START, SUCCESS, FAIL, FINISH_CHALLENGE, VALIDATION} from '../constants/actions';

import {config} from '../config';

const questions_url = config.urls.questions;
const answers_url = config.urls.answers;


export default store => next => action => {

  const {type, payload} = action;

  switch (type) {
    case LOAD_ALL_QUESTIONS:

      next({type: LOAD_ALL_QUESTIONS + START, payload});

      fetch(questions_url)
        .then(response => response.json())
        .then((questions) => {
          if (questions.length) {
            next({
              type: LOAD_ALL_QUESTIONS + SUCCESS,
              payload: {items: questions}
            });
          } else {
            throw new Error('Received 0 questions');
          }
        })
        .catch(function (error) {
          next({
            type: LOAD_ALL_QUESTIONS + FAIL,
            payload: {error}
          });
        });
      break;

    case FINISH_CHALLENGE:

      next(action);
      next({type: VALIDATION + START, payload});

      const {challenge: {answers}} = store.getState();

      fetch(answers_url)
        .then(response => response.json())
        .then((answerList) => {
          const result = validateAnswers(answers, answerList);

          // simulating server-side validation
          setTimeout(function () {
            next({
              type: VALIDATION + SUCCESS,
              payload: {result}
            });
          }, 1200);
        })
        .catch(function (error) {
          next({
            type: VALIDATION + FAIL,
            payload: {error}
          });
        });
      break;

    default:
      return next(action);
  }
}

function validateAnswers(answers, answerList) {
  const total = answerList.length;
  let correct = 0;

  answerList.forEach((correctAnswer)=> {
    let answer = answers.filter(i=> i.question_id === correctAnswer.question_id)[0];
    if (answer && answer.answer_id === correctAnswer.answer_id) {
      correct++;
    }
  });

  return {
    correct,
    total
  }
}

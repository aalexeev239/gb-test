import {LOAD_ALL_QUESTIONS, START, SUCCESS, FAIL} from '../constants/actions';

export default store => next => action => {

  if (action.type !== LOAD_ALL_QUESTIONS) {
    return next(action);
  }
  const {payload: {url, ...rest}} = action;
  next({type: LOAD_ALL_QUESTIONS + START, payload: {...rest}});

  fetch(url)
    .then(function (response) {
      return response.json()
    }).then(function (questions) {
    next({type: LOAD_ALL_QUESTIONS + SUCCESS, payload: {...rest, items: questions}});
  }).catch(function (error) {
    next({type: LOAD_ALL_QUESTIONS + FAIL, payload: {...rest, error}});
  });
}

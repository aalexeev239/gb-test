import {GO_NEXT, FINISH_CHALLENGE} from '../constants/actions';
import {config} from '../config';

const answers_url = config.urls.answers;


export default store => next => action => {
  if (action.type !== GO_NEXT) {
    return next(action);
  } else {
    const {current, total, answers} = store.getState().challenge;
    const {payload:{...rest}} = action;

    if (current < total - 1) {
      return next(action)
    } else {
      next({
        type: FINISH_CHALLENGE,
        payload: {
          ...rest,
          url: answers_url,
          answers
        }
      });
    }
  }
}

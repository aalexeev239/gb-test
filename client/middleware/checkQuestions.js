import {GO_NEXT, FINISH_CHALLENGE} from '../constants/actions';
import {config} from '../config';

const answers_url = config.urls.answers;


export default store => next => action => {
  if (action.type !== GO_NEXT) {
    return next(action);
  } else {
    const {current, total} = store.getState().challenge;

    if (current < total - 1) {
      return next(action)
    } else {
      next({
        type: FINISH_CHALLENGE
      });
    }
  }
}

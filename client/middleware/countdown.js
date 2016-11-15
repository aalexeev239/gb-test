import {START_CHALLENGE, COUNTDOWN, START} from '../constants/actions';

export default store => next => action => {

  const {type, payload} = action;

  switch (type) {
    case START_CHALLENGE:
      next({
        type: COUNTDOWN + START
      })
      break;


    default:
      return next(action);
  }
}

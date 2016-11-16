import {START_CHALLENGE, FINISH_CHALLENGE, COUNTDOWN, START, STOP, TICK} from '../constants/actions';

let interval = null;

export default store => next => action => {

  const {type} = action;
  const fireTick = () => {
    next({
      type: COUNTDOWN + TICK,
      payload: {
        time: Date.now()
      }
    });
  };

  switch (type) {
    case START_CHALLENGE:
      next({
        type: COUNTDOWN + START,
        payload: {
          offset: Date.now()
        }
      });

      interval = setInterval(() => {
        let {countdown: {time, isOn}} = store.getState();

        if (isOn) {
          fireTick()
          if (time < 1000) {
            clearInterval(interval);
            next({
              type: COUNTDOWN + STOP,
            });
            next({
              type: FINISH_CHALLENGE,
            })
          }
        } else {
          clearInterval(interval);
        }
      }, 1000);

      fireTick();


      return next(action);

    case (FINISH_CHALLENGE):
      next({
        type: COUNTDOWN + STOP,
      });
      clearInterval(interval);
      return next(action);
      break;

    default:
      return next(action);
  }
}

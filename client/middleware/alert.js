import {START_CHALLENGE, SHOW_ALERT, HIDE_ALERT} from '../constants/actions';
import {ALERT_START_CHALLENGE} from '../constants/alert';

import {config} from '../config';

const {alertDelay} = config;


let showTimeout = null;

export default store => next => action => {
  const {type} = action;

  switch (type) {
    case START_CHALLENGE:
      next({
        type: SHOW_ALERT,
        payload: {
          text: ALERT_START_CHALLENGE
        }
      });

      if (showTimeout) {
        clearTimeout(showTimeout);
      }

      showTimeout = setTimeout(() => {
        next({
          type: HIDE_ALERT,
        });
      }, 2000);

      return next(action);

    default:
      return next(action);
  }
}

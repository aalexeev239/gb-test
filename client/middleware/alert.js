import {START_CHALLENGE, SHOW_ALERT, HIDE_ALERT} from '../constants/actions';
import {ALERT_START_CHALLENGE} from '../constants/alert';

import {config} from '../config';

const {alertDelay} = config;

let showTimeout = null;

export default store => next => action => {
  const {type} = action;

  const delayedHide = () => {
    if (showTimeout) {
      clearTimeout(showTimeout);
    }

    showTimeout = setTimeout(() => {
      next({
        type: HIDE_ALERT,
      });
    }, alertDelay);
  };

  switch (type) {
    case START_CHALLENGE:
      next({
        type: SHOW_ALERT,
        payload: {
          text: ALERT_START_CHALLENGE
        }
      });

      delayedHide();
      break;

    case SHOW_ALERT:
      delayedHide();
      break;
  }

  return next(action);
}


import {createStore, applyMiddleware} from 'redux';

import {api, checkQuestions} from '../middleware';
import rootReducer from '../reducers';
import createLogger from 'redux-logger';

export default function configure(initialState) {
  const create = window.devToolsExtension
    ? window.devToolsExtension()(createStore)
    : createStore

  // attention!
  // order is important
  const createStoreWithMiddleware = applyMiddleware(
    checkQuestions,
    // countdown,
    api,
    createLogger()
  )(create);

  const store = createStoreWithMiddleware(rootReducer, initialState);

  if (module.hot) {
    module.hot.accept('../reducers', () => {
      const nextReducer = require('../reducers')
      store.replaceReducer(nextReducer)
    })
  }

  return store
}

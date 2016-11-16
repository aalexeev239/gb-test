import {Router, Route, browserHistory} from 'react-router';
import {syncHistoryWithStore} from 'react-router-redux';
import {Provider} from 'react-redux';
import ReactDOM from 'react-dom';
import React from 'react';

import App from './containers/App';
import configure from './store';
import './styles/global.css';


const store = configure();
const history = syncHistoryWithStore(browserHistory, store);

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      {/* позор на мои седины. Github-pages, это только ради тебя */}
      <Route path="*" component={App}>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
)

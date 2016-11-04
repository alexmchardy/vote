import React from 'react';
import {render} from 'react-dom';
import { createStore, combineReducers } from 'redux';
import { Router, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import { syncHistoryWithStore, routerReducer } from 'react-router-redux';

import { configureStore } from './app/store';
import routes from './app/routes';

import mainCss from './static/main.css';

// import reducers from './reducers';

// Add the reducer to your store on the `routing` key
// const store = createStore(
//   combineReducers({
//     ...reducers,
//     routing: routerReducer
//   })
// )

// Create an enhanced history that syncs navigation events with the store
const store = configureStore(browserHistory, window.__initialState__);
const history = syncHistoryWithStore(browserHistory, store);

// Render the main app react component into the app div.
// For more details see: https://facebook.github.io/react/docs/top-level-api.html#react.render
render(
  <Provider store={store}>
    <Router history={history} routes={routes} />
  </Provider>,
  document.getElementById('root')
);

import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

import App from './containers/App';
import store from './redux/store';
import { fetchCakes } from './redux/actions';

import Styles from './index.css';

store.dispatch(fetchCakes());

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
)

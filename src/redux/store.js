import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import cakeReducers from './reducers';

const store = createStore(
  cakeReducers,
  applyMiddleware(thunk)
);

export default store;

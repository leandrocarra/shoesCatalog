/* eslint-disable no-underscore-dangle */
import { createStore, applyMiddleware } from 'redux';

import rootReducer from './modules/rootReducer';

const devTools =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const store = applyMiddleware()(createStore)(rootReducer, devTools);
export default store;

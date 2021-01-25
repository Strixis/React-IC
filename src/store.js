import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import { routerMiddleware } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import thunk from 'redux-thunk';

import { bot } from 'middlewares/messageMiddleware';
import { initReducer } from 'reducers';

const history = createBrowserHistory();

const store = createStore(
  initReducer(history),
  applyMiddleware(logger, bot, routerMiddleware(history), thunk)
);

export { store, history };

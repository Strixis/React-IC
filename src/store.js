import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import { bot } from 'middlewares/messageMiddleware';

import { rootReducer } from 'reducers';

const store = createStore(rootReducer, applyMiddleware(logger, bot));

export { store };

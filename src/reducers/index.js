import { combineReducers } from 'redux';

import { chatsReducer } from './chats';

const rootReducer = combineReducers({
  chats: chatsReducer,
});

export { rootReducer };

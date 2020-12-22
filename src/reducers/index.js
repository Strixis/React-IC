import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import { chatsReducer } from './chats';
import { profileReducer } from './profile';

const initReducer = history => combineReducers({
  router: connectRouter(history),
  chats: chatsReducer,
  profile: profileReducer,
});

export { initReducer };

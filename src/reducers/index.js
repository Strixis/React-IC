import { combineReducers } from 'redux';

import { chatsReducer } from './chats';
import { profileReducer } from './profile';

const rootReducer = combineReducers({
  chats: chatsReducer,
  profile: profileReducer,
});

export { rootReducer };

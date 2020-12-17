import { handleActions } from 'redux-actions';
import { Map, fromJS } from 'immutable';

import { load, send, add, remove } from 'actions/chats';

const initialState = new Map({
  loading: false,
  entries: new Map(),
});

const chatsReducer = handleActions({
  [load]: (state, action) => {
    return state.set('entries', fromJS({
      '1': {
        id: 1,
        name: 'Chat 1',
        messages: [
          {
            author: 'Bot',
            text: 'This is chat 1.',
          }
        ],
      },
      '2': {
        id: 2,
        name: 'Chat 2',
        messages: [
          {
            author: 'Bot',
            text: 'This is chat 2.',
          }
        ],
      },
      '3': {
        id: 3,
        name: 'Chat 3',
        messages: [
          {
            author: 'Bot',
            text: 'This is chat 3.',
          }
        ],
      },
    }));
  },
  [send]: (state, action) => {
    const { chatId, ...message } = action.payload;

    return state.mergeIn(['entries', chatId, 'messages'], message);
  },
  [add]: (state, action) => {
    const { newChat } = action.payload;

    return state.mergeIn(['entries'], fromJS(newChat));
  },
  // [remove]: (state, action) => {
  //   const id = action.payload;

  //   return state.deleteIn(['entries', `${ id }`]);
  // }
}, initialState);

export { chatsReducer };

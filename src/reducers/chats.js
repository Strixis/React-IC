import { handleActions } from 'redux-actions';
import { Map, fromJS } from 'immutable';

import { load, send, add, remove, blink } from 'actions/chats';

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
        newMessageFlag: false,
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
        newMessageFlag: false,
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
        newMessageFlag: false,
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
  // },
  [blink]: (state, action) => {
    const { newMessageFlag, chatId } = action.payload;

    return state.mergeIn(['entries', chatId ], newMessageFlag);
  }
}, initialState);

export { chatsReducer };

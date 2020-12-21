import { handleActions } from 'redux-actions';
import { Map, fromJS } from 'immutable';

import { load, send, add, remove, blink } from 'actions/chats';

const initialState = new Map({
  loading: false,
  entries: new Map(),
});

const chatsReducer = handleActions({
  [load]: (state, action) => {
    const entries = action.payload.reduce((acc, item) => {
      acc[item._id] = { ...item, timestamp: new Date()};

      return acc;
    }, {});

    return state.set('entries', fromJS(entries));
  },

  [send]: (state, action) => {
    const { chatId, ...message } = action.payload;

    return state
      .mergeIn(['entries', chatId, 'messages'], message)
      .setIn(['entries', chatId, 'timestamp'], new Date())
  },
  [blink]: (state, action) => {
    const { newMessageFlag, chatId } = action.payload;

    return state.mergeIn(['entries', chatId ], newMessageFlag);
  },

  [add]: (state, action) => {
    const { _id } = action.payload;

    return state.mergeIn(['entries', _id], fromJS({ ...action.payload, timestamp: new Date() }));
  },
  [remove]: (state, action) => {
    return state.deleteIn(['entries', `${ action.payload }`]);
  }
}, initialState);

export { chatsReducer };

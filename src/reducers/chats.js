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
      acc[item._id] = item;

      return acc;
    }, {});
    
    return state.set('entries', fromJS(entries));
  },
  [send]: (state, action) => {
    const { chatId, ...message } = action.payload;

    return state.mergeIn(['entries', chatId, 'messages'], message);
  },
  [add]: (state, action) => {
    const { /* newChatName, */ _id } = action.payload;
    // const newChatId = state.get('entries').size + 1;

    // const newChat = {
    //   id: newChatId || _id,
    //   name: newChatName,
    //   newMessageFlag: false,
    //   messages: []
    // }
    
    // return state.mergeIn(['entries', /* newChatId || */ _id], fromJS(newChat));
    return state.mergeIn(['entries', _id], fromJS(action.payload));
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

import { createAction } from 'redux-actions';

const load = createAction('[Chats] Load');
const send = createAction('[Chats] Send');
const add = createAction('[Chats] Add');
const remove = createAction('[Chats] Remove')

export { load, send, add, remove };

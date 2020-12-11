import { createAction } from 'redux-actions';

const load = createAction('[Chats] Load');
const send = createAction('[Chats] Send');

export { load, send };

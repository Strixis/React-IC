import { createAction } from 'redux-actions';
import io from 'socket.io-client';

const socket = io('http://localhost:3000');

const load = createAction('[Chats] Load');
const send = createAction('[Chats] Send');
const add = createAction('[Chats] Add');
const remove = createAction('[Chats] Remove');
const blink = createAction('[Chats] Blink')

const listen = () => dispatch => {
  fetch('http://localhost:3000/chats')
    .then((res) => res.json())
    .then((chats) => {
      dispatch(load(chats))
    })
    .catch((err) => console.log(err))

  socket.on('new chat', (chat) => {
    dispatch(add(chat))
  })

  socket.on('chat message', (message) => {
    dispatch(send(message))
  })
}

const createChat = chat => {
  socket.emit('new chat', chat);
};

const sendMessage = message => {
  socket.emit('chat message', message);
};

export {
  load, send, add, remove, blink,
  listen, createChat, sendMessage
};

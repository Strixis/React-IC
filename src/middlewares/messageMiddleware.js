import { send, blink } from 'actions/chats';
import { Bot } from 'components/Bot';

const bot = store => next => action => {
  if (action.type === send.toString()) {
    const { chatId, author, /* text */ } = action.payload;

    // if (author !== 'Bot') {
    //   setTimeout(() => {
    //     store.dispatch(send({
    //       ...Bot.getAnswer({ author, text }),
    //       chatId,
    //     }));
    //   }, 1000);
    // }

    if (author === 'Bot' && !store.getState().chats.getIn(['entries', chatId, 'newMessageFlag'])) {
      store.dispatch(blink({
        newMessageFlag: {newMessageFlag: true},
        chatId
      }));

      setTimeout(() => {
        store.dispatch(blink({
          newMessageFlag: {newMessageFlag: false},
          chatId
        }));
      }, 2000)
    }
  }

  return next(action);
};

export { bot };

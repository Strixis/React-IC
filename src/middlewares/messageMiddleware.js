import { send } from 'actions/chats';
import { Bot } from 'components/Bot';

const bot = store => next => action => {
  if (action.type === send.toString()) {
    const { chatId, author, text } = action.payload;
    if (author !== 'Bot') {
      setTimeout(() => {
        store.dispatch(send({
          ...Bot.getAnswer({ author, text }),
          chatId,
        }));
      }, 3000);
    }
  }

  return next(action);
};

export { bot };

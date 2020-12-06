import './Messanger.less';

import React, { Component } from 'react';

import { MessagesList } from 'components/MessageList';
import { MessageField } from 'components/MessageField';
import { Bot } from 'components/Bot';

class Messanger extends Component {
  state = {
    chats: {
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
    }
  }

  componentDidUpdate() {
    if (this.messages) {
      const { chats } = this.state;
      const { chatId } = this.props;

      const chat = chats[chatId];

      const messages = this.messages;
      const message = messages[messages.length - 1];

      if (message.author !== 'Bot') {
        setTimeout(() => {
          chat.messages = messages.concat(Bot.getAnswer(message));
          console.log(chat.messages);

          this.setState({
            chats: {
              ...this.state.chats,
              [chatId]: chat,
            }
          })
        }, 1000);
      }
    }
  }

  handleMessageSend = (message) => {
    const { chats } = this.state;
    const { chatId } = this.props;

    const chat = chats[chatId];
    const messages = this.messages.concat([message]);
    chat.messages = messages;

    this.setState({
      chats: {
        ...this.state.chats,
        [chatId]: chat,
      }
    })
  }

  get messages() {
    const { chats } = this.state;
    const { chatId } = this.props;
    
    let messages = null;

    if (chatId && chats[chatId]) {
      messages = chats[chatId].messages;
    }

    return messages;
  }

  render() {
    return (
      <div className="messanger">
        { this.messages ? <MessagesList messages={ this.messages }/> : <p>Выберите чат.</p> }
        { this.messages && <MessageField onSend={ this.handleMessageSend } /> }
      </div>
    )
  }
};

export { Messanger };

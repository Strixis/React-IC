import './Layout.less';

import React, { Component } from 'react';
import { ChatList } from 'components/ChatList';
import { Header } from 'components/Header';
import { Messanger } from 'components/Messanger';
import { Bot } from 'components/Bot';

class Layout extends Component {
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
      const { match } = this.props;

      const chat = chats[match.params.id];

      const messages = this.messages;
      const message = messages[messages.length - 1];

      if (message.author !== 'Bot') {
        setTimeout(() => {
          chat.messages = messages.concat(Bot.getAnswer(message));

          this.setState({
            chats: {
              ...this.state.chats,
              [match.params.id]: chat,
            }
          })
        }, 1000);
      }
    }
  }

  handleMessageSend = (message) => {
    const { chats } = this.state;
    const { match } = this.props;

    const chat = chats[match.params.id];
    const messages = this.messages.concat([message]);
    chat.messages = messages;

    this.setState({
      chats: {
        ...this.state.chats,
        [match.params.id]: chat,
      }
    })
  }

  get messages() {
    const { chats } = this.state;
    const { match } = this.props;
    
    let messages = null;

    if (match && chats[match.params.id]) {
      messages = chats[match.params.id].messages;
    }

    return messages;
  }

  render() {
    return (
      <div>
        <Header />
        <div className="chat-space">
          <ChatList />
          <Messanger onSend={ this.handleMessageSend } messages={ this.messages } />
        </div>
      </div>
    )
  }
}

export { Layout };

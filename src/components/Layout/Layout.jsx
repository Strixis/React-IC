import './Layout.less';

import React, { Component } from 'react';
import { ChatList } from 'components/ChatList';
import { Header } from 'components/Header';
import { Messanger } from 'components/Messanger';
import { Bot } from 'components/Bot';

class Layout extends Component {
  /* componentDidUpdate() {
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
  } */
  render() {
    const { chats, messages, chatName, sendMessage, addChat } = this.props;
    return (
      <div className="main">
        <Header chatName={ chatName } />
        <div className="chat-space">
          <ChatList newChat={ addChat } chats={ chats } />
          <Messanger onSend={ sendMessage } messages={ messages } />
        </div>
      </div>
    )
  }
}

export { Layout };

import './Layout.less';

import React, { Component } from 'react';
import { ChatList } from 'components/ChatList';
import { Header } from 'components/Header';
import { Messanger } from 'components/Messanger';

class Layout extends Component {
  render() {
    const { chats, messages, chatName, sendMessage, addChat, user, navigate } = this.props;
    return (
      <div className="main">
        <Header chatName={ chatName } user={ user } />
        <div className="chat-space">
          <ChatList newChat={ addChat } chats={ chats } navigate={ navigate } />
          <Messanger onSend={ sendMessage } messages={ messages } />
        </div>
      </div>
    )
  }
}

export { Layout };

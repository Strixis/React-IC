import './Layout.less';

import React, { Component } from 'react';
import { ChatListRedux } from 'containers/ChatListContainer';
import { Header } from 'components/Header';
import { MessangerRedux } from 'containers/MessangerContainer';

class Layout extends Component {
  render() {
    // const { chats, messages, chatName, sendMessage, addChat, user, navigate, removeChat } = this.props;
    // return (
    //   <div className="main">
    //     <Header chatName={ chatName } user={ user } />
    //     <div className="chat-space">
    //       <ChatList newChat={ addChat } chats={ chats } navigate={ navigate } removeChat={ removeChat } />
    //       <Messanger onSend={ sendMessage } messages={ messages } />
    //     </div>
    //   </div>
    // )
    const { chats, chatName, addChat, user, navigate, match } = this.props;
    return (
      <div className="main">
        <Header chatName={ chatName } user={ user } />
        <div className="chat-space">
          <ChatListRedux match={ match } />
          <MessangerRedux match={ match } />
        </div>
      </div>
    )
  }
}

export { Layout };

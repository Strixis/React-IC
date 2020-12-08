import './Layout.less';

import React, { Component } from 'react';
import { ChatList } from 'components/ChatList';
import { Header } from 'components/Header';
import { Messanger } from '../Messanger/Messanger';

class Layout extends Component {
render() {
  return (
    <div>
      <Header />
      <div className="chat-space">
        <ChatList />
        <Messanger />
      </div>
    </div>
  )
}
}

export { Layout };

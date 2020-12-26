import './Layout.less';

import React, { Component } from 'react';
import { ChatListRedux } from 'containers/ChatListContainer';
import { HeaderRedux } from 'containers/HeaderContainer';
import { MessangerRedux } from 'containers/MessangerContainer';

class Layout extends Component {
  render() {
    const { match } = this.props;
    
    return (
      <div className="main">
        <HeaderRedux match={ match } />
        <div className="chat-space">
          <ChatListRedux match={ match } />
          <MessangerRedux match={ match } />
        </div>
      </div>
    )
  }
}

export { Layout };

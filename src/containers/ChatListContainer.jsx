import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { push } from 'connected-react-router';

import { ChatList } from 'components/ChatList';
import { listen, createChat } from 'actions/chats';

class ChatListContainer extends PureComponent {
  componentDidMount() {
    console.log('chat list mounted');
    const { listenChat } = this.props;

    listenChat();
  }

  handleNewChat = () => {
    const { createChat } = this.props;
    
    const newChatName = prompt('Enter chat name: ');
    
    createChat({ name: newChatName });
  }

  render() {
    const { chats, redirect } = this.props;

    return(
      <ChatList addChat={ this.handleNewChat } chats={ chats } navigate={ redirect }
      />
    )
  }
};

function mapStateToProps(state, ownProps) {
  const chats = state.chats.get('entries');

  return {
    chats: chats.map((entry) => ({
      id: entry.get('_id'),
      name: entry.get('name'),
      newMessage: entry.get('newMessageFlag'),
      link: `/chats/${entry.get('_id')}`})).toList().toJS(),
  }
};

function mapDispatchToProps(dispatch) {
  return {
    createChat,
    listenChat: () => dispatch(listen()),
    redirect: (id) => dispatch(push(`/chats/${ id }`)),
  }
};

const ChatListRedux = connect(mapStateToProps, mapDispatchToProps)(ChatListContainer);

export { ChatListRedux };

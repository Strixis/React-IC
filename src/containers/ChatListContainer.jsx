import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { push } from 'connected-react-router';

import { ChatList } from 'components/ChatList';
import { load, add, remove } from 'actions/chats';

class ChatListContainer extends PureComponent {
  componentDidMount() {
    const { loadChats, chats } = this.props;

    if (chats.length === 0) loadChats();
  }

  handleNewChat = () => {
    const { chats, addChat, redirect } = this.props;
    console.log(chats);
    
    const newChatId = chats.length + 1;
    const newChatName = prompt('Enter chat name: ');
    const newChatMessages = [{author: 'Bot', text: `This is ${ newChatName}`}];
    const newChat = {
      [`${ newChatId }`]: {
        id: newChatId,
        name: newChatName,
        messages: [...newChatMessages],
      }
    }
    
    addChat({newChat});
    redirect(newChatId);
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
  const { match } = ownProps;

  let chatId = null;
  let chatName = 'Home';

  if (match && chats.has(match.params.id)) {
    chatName = chats.getIn([match.params.id, 'name']);
    chatId = match.params.id;
  }

  return {
    chats: chats.map((entry) => ({
      id: entry.get('id'),
      name: entry.get('name'),
      link: `/chats/${entry.get('id')}`})).toList().toJS(),
    chatName,
    chatId
  }
};

function mapDispatchToProps(dispatch) {
  return {
    loadChats: () => dispatch(load()),
    addChat: (chat) => dispatch(add(chat)),
    redirect: (id) => dispatch(push(`/chats/${ id }`)),
    // removeChat: (id) => dispatch(remove(id)),
  }
};

const ChatListRedux = connect(mapStateToProps, mapDispatchToProps)(ChatListContainer);

export { ChatListRedux };

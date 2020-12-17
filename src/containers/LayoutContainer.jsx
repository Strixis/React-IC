import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import { Layout } from 'components/Layout';
import { load, send, add } from 'actions/chats';
import { Bot } from 'components/Bot';

class LayoutContainer extends PureComponent {
  componentDidMount() {
    const { loadChats, chats } = this.props;

    if (chats.length === 0) loadChats();
  }

  componentDidUpdate(prevProps) {
    const { messages, sendMessage, chatId } = this.props;

    if (messages) {
      const message = messages[messages.length - 1];
      
      if (
          message.author !== 'Bot' && 
          chatId === prevProps.chatId &&
          messages.length > prevProps.messages.length
        ) {
        setTimeout(() => {
          sendMessage({
            ...Bot.getAnswer(message),
            chatId,
          });
        }, 3000);
      }
    }
  }

  handleMessageSend = (message) => {
    const { sendMessage, chatId } = this.props;
    sendMessage({
      ...message,
      chatId,
    });
  }

  handleNewChat = () => {
    const { chats, addChat } = this.props;
    
    const newChatId = chats.length + 1;
    const newChatName = `Chat ${ newChatId }`;
    const newChatMessages = [{author: 'Bot', text: `This is ${ newChatName}`}];
    const newChat = {
      [`${ newChatId }`]: {
        id: newChatId,
        name: newChatName,
        messages: [...newChatMessages],
      }
    }
    
    addChat({newChat});
  }

  render() {
    const { chats, messages, chatName, user } = this.props;
    return (
      <Layout sendMessage={ this.handleMessageSend }
        addChat={ this.handleNewChat }
        messages={ messages }
        chats={ chats }
        chatName={ chatName }
        user={ user }
      />
    )
  }
};

function mapStateToProps(state, ownProps) {
  const chats = state.chats.get('entries');
  const user = state.profile.toJS();
  const { match } = ownProps;

  let messages = null;
  let chatId = null;
  let chatName = 'Home';

  if (match && chats.has(match.params.id)) {
    messages = chats.getIn([match.params.id, 'messages']).toJS();
    chatName = chats.getIn([match.params.id, 'name']);
    chatId = match.params.id;
  }

  return {
    chats: chats.map((entry) => ({
      id: entry.get('id'),
      name: entry.get('name'),
      link: `/chats/${entry.get('id')}`})).toList().toJS(),
    messages,
    chatName,
    chatId,
    user,
  }
};

function mapDispatchToProps(dispatch) {
  return {
    loadChats: () => dispatch(load()),
    sendMessage: (message) => dispatch(send(message)),
    addChat: (chat) => dispatch(add(chat)),
  }
};

const LayoutRedux = connect(mapStateToProps, mapDispatchToProps)(LayoutContainer);

export { LayoutRedux };

import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import { Layout } from 'components/Layout';
import { load, send } from 'actions/chats';

class LayoutContainer extends PureComponent {
  componentDidMount() {
    const { loadChats } = this.props;

    loadChats();
  }

  handleMessageSend = (message) => {
    const { sendMessage, chatId } = this.props;

    sendMessage({
      ...message,
      chatId,
    });
  }

  render() {
    const { chats, messages, chatName } = this.props;
    return (
      <Layout sendMessage={ this.handleMessageSend }
        messages={ messages }
        chats={ chats }
        chatName={ chatName }
      />
    )
  }
};

function mapStateToProps(state, ownProps) {
  const chats = state.chats.get('entries');
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
  }
};

function mapDispatchToProps(dispatch) {
  return {
    loadChats: () => dispatch(load()),
    sendMessage: (message) => dispatch(send(message)),
  }
};

const LayoutRedux = connect(mapStateToProps, mapDispatchToProps)(LayoutContainer);

export { LayoutRedux };

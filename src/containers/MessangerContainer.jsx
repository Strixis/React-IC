import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import { Messanger } from 'components/Messanger';
import { send } from 'actions/chats';

class MessangerContainer extends PureComponent {
  handleMessageSend = (message) => {
    const { sendMessage, chatId } = this.props;
    sendMessage({
      ...message,
      chatId,
    });
  }

  render() {
    const { messages } = this.props;

    return (
      <Messanger messages={ messages } onSend={ this.handleMessageSend } />
    )
  }
};

function mapStateToProps(state, ownProps) {
  const chats = state.chats.get('entries');
  const { match } = ownProps;

  let messages = null;
  let chatId = null;

  if (match && chats.has(match.params.id)) {
    messages = chats.getIn([match.params.id, 'messages']).toJS();
    chatId = match.params.id;
  }

  return {
    messages,
    chatId
  }
};

function mapDispatchToProps(dispatch) {
  return {
    sendMessage: (message) => dispatch(send(message)),
  }
};

const MessangerRedux = connect(mapStateToProps, mapDispatchToProps)(MessangerContainer);

export { MessangerRedux };

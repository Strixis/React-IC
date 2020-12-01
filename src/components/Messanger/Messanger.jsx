import React, { Component } from 'react';

import { MessagesList } from 'components/MessageList';
import { MessageField } from 'components/MessageField';
import { Bot } from 'components/Bot';

class Messanger extends Component {
  state = {
    messages: [],
  }

  componentDidUpdate() {
    const message = this.state.messages[this.state.messages.length - 1];

    if (message.author !== 'Bot') {
      setTimeout(() => {
        this.setState({
          messages: this.state.messages.concat(Bot.getAnswer(message)),
        })
      }, 1000);
    }
  }

  handleMessageSend = (message) => {z
    this.setState(({ messages }) => ({ messages: messages.concat([message]) }))
  }

  render() {
    const { messages } = this.state;

    return (
      <div>
        <MessagesList messages={ messages }/>
        <MessageField onSend={ this.handleMessageSend } />
      </div>
    )
  }
};

export { Messanger };

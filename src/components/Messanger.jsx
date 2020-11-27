import React, { Component } from 'react';

import { MessagesList } from './MessagesList';
import { MessageField } from './MessageField';

class Messanger extends Component {
  state = {
    messages: [],
  }

  componentDidUpdate() {
    const author = this.state.messages[this.state.messages.length - 1].author;
    if (author !== 'Bot') {
      setTimeout(() => {
        this.setState({
          messages: this.state.messages.concat([{
            text: `Hello from Bot, ${ author }!`,
            author: 'Bot',
          }]),
        })
      }, 1000);
    }
  }

  handleMessageSend = (message) => {
    this.setState({
      messages: this.state.messages.concat([message]),
    })
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

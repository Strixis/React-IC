import React, { Component } from 'react';
import PropType from 'prop-types';

import { Message } from 'components/Message'

class MessagesList extends Component {
  static propTypes = {
    messages: PropType.array,
  }

  render() {
    const { messages } = this.props;

    return (
      <ul>
        { messages.map((message, index) => {
            return (
              <Message key={ index } author={ message.author } text={ message.text } />
            )
          })
        }
      </ul>
    )
  }
};

export { MessagesList };

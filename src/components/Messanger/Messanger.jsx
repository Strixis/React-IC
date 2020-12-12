import './Messanger.less';

import React, { Component } from 'react';
import PropType from 'prop-types';

import { MessagesList } from 'components/MessageList';
import { MessageField } from 'components/MessageField';

class Messanger extends Component {
  static propTypes = {
    onSend: PropType.func,
    messages: PropType.array,
  }

  render() {
    const { messages } = this.props;
    const { onSend } = this.props;

    return (
      <div className="messanger">
        { messages ? <MessagesList messages={ messages }/> : <p className="dummy">Выберите чат.</p> }
        { messages && <MessageField onSend={ onSend } /> }
      </div>
    )
  }
};

export { Messanger };

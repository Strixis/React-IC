import './Message.less';

import React, { Component } from 'react';
import PropType from 'prop-types';
import classNames from 'classnames';

class Message extends Component {
  static propType = {
    author: PropType.string,
    text: PropType.string,
  }

  render() {
    const { author, text } = this.props;

    const classes = classNames('message', {
      'message_owner': author !== 'Bot',
      'message_companion': author === 'Bot'
    })

    return (
    <li className={ classes }>
      <span className="message_author">{ author }</span>
      <span className="message_text">{ text }</span>
    </li>
    )
  }
};

export { Message };

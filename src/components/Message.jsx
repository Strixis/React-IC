import React, { Component } from 'react';
import PropType from 'prop-types';

class Message extends Component {
  static propType = {
    author: PropType.string,
    text: PropType.string,
  }

  render() {
    const { author, text } = this.props;

    return <li>{ author }: { text }</li>
  }
};

export { Message };

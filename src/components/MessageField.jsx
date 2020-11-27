import React, { Component } from 'react';
import PropType from 'prop-types';

class MessageField extends Component {
  state = {
    author: '',
    text: '',
  }

  static propTypes = {
    onSend: PropType.func,
  }

  handleMessageSend = () => {
    const { onSend } = this.props;
    if (typeof onSend === 'function') {
      onSend(this.state);

      this.setState({ text: '' });
    }
  }

  handleInputChange = (event) => {
    const fieldName = event.target.name;

    this.setState({
      [fieldName]: event.target.value,
    });
  }

  render() {
    const { author, text } = this.state;
    
    return (
      <div>
        <input name="author" onChange={ this.handleInputChange } type="text" placeholder="Name" value={ author }/><br/>
        <textarea name="text" onChange={ this.handleInputChange } placeholder="Enter text" value={ text }></textarea><br/>
        <button onClick={ this.handleMessageSend }>Send</button>
      </div>
    )
  }
};

export { MessageField };

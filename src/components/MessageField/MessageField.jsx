import React, { Component } from 'react';
import PropType from 'prop-types';

class MessageField extends Component {
  state = {
    author: '',
    text: '',
    isValid: true,
  }

  static propTypes = {
    onSend: PropType.func,
  }

  handleMessageSend = () => {
    if (this.state.author.match(/^\s*\S/) && this.state.text.match(/^\s*\S/)) {
      const { onSend } = this.props;

      if (typeof onSend === 'function') {
        onSend({ author: this.state.author, text: this.state.text });

        this.setState({ text: '', isValid: true });
      }
    } else {
      this.setState({ isValid: false });
    }
  }

  handleInputChange = (event) => {
    const fieldName = event.target.name;

    this.setState({
      [fieldName]: event.target.value,
    });
  }

  handleEnterDown = (event) => {
    if (event.ctrlKey && event.keyCode === 13) {
      this.handleMessageSend();
    }
  }

  render() {
    const { author, text, isValid } = this.state;
    
    return (
      <div>
        { !isValid && <p>Поля не должны быть пустыми!</p> }
        <input name="author" onChange={ this.handleInputChange } type="text" placeholder="Name" value={ author }/><br/>
        <textarea name="text" onChange={ this.handleInputChange } onKeyDown={ this.handleEnterDown } placeholder="Enter text" value={ text }></textarea><br/>
        <button onClick={ this.handleMessageSend }>Send</button>
      </div>
    )
  }
};

export { MessageField };

import React, { Component } from 'react';
import PropType from 'prop-types';
import Button from '@material-ui/core/Button';
import SendIcon from '@material-ui/icons/Send';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import { themeGreen } from 'assets/themes';
import { ThemeProvider } from '@material-ui/core';

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
      <Grid container
        direction="column"
        justify="center"
        alignItems="center"
      >
        { !isValid && <p>Поля не должны быть пустыми!</p> }
        <ThemeProvider theme={ themeGreen }>
          <TextField variant='outlined'
            style={{ margin: '5px' }}
            name="author"
            onChange={ this.handleInputChange }
            type="text" placeholder="Name"
            value={ author }
          />
          <TextField variant='outlined'
            style={{ margin: '5px' }}
            name="text"
            onChange={ this.handleInputChange }
            onKeyDown={ this.handleEnterDown }
            placeholder="Enter text"
            value={ text }
          />
          <Button onClick={ this.handleMessageSend }
            style={{ margin: '5px' }}
            variant="contained"
            color="primary"
            endIcon={<SendIcon/>}
          >
            Send
          </Button>
        </ThemeProvider>
      </Grid>
    )
  }
};

export { MessageField };

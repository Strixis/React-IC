import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

class ChatList extends Component {
  render() {
    return (
      <List>
        <Link to="/chats/1">
          <ListItem>
            <ListItemText primary="Chat 1" />
          </ListItem>
        </Link>
        <Link to="/chats/2">
          <ListItem>
            <ListItemText primary="Chat 2" />
          </ListItem>
        </Link>
        <Link to="/chats/3">
          <ListItem>
            <ListItemText primary="Chat 3" />
          </ListItem>
        </Link>
      </List>
    )
  }
}

export { ChatList };

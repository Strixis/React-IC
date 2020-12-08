import './ChatList.less';

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropType from 'prop-types';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

class ChatList extends Component {
  static propTypes = {
    newChat: PropType.func,
    chats: PropType.array,
  }

  render() {
    const { chats } = this.props;
    const { newChat } = this.props;

    return (
      <div className="chat-list">
        <List className="list">
          { chats.map((chat) => {
            return (
              <Link to={ `/chats/${ chat.id }` } key={ chat.id } className="list_link">
                <ListItem style={{ textAlign: "center" }}>
                  <ListItemText primary={ chat.name } />
                </ListItem>
              </Link>
            )
          })}
        </List>
        <button onClick={ newChat }>New chat</button>
      </div>
    )
    /* return (
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
    ) */
  }
}

export { ChatList };

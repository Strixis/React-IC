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
    const { chats, newChat } = this.props;

    return (
      <div className="chat-list">
        <List className="list">
          { chats.map((chat) => {
            return (
              <Link to={ chat.link } key={ chat.id } className="list_link">
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
  }
}

export { ChatList };

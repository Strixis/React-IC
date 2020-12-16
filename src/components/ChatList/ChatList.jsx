import './ChatList.less';

import React, { Component } from 'react';
import PropType from 'prop-types';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

class ChatList extends Component {
  static propTypes = {
    newChat: PropType.func,
    chats: PropType.array,
  }

  handleNavigate = (id) => {
    const { navigate } = this.props;

    navigate(id)
  }

  render() {
    const { chats, newChat } = this.props;

    return (
      <div className="chat-list">
        <List className="list">
          { chats.map((chat) => {
            return (
              <button onClick={ () => this.handleNavigate(chat.id) } key={ chat.id } className="list_link">
                <ListItem style={{ textAlign: "center" }}>
                  <ListItemText primary={ chat.name } />
                </ListItem>
              </button>
            )
          })}
        </List>
        <button onClick={ newChat }>New chat</button>
      </div>
    )
  }
}

export { ChatList };

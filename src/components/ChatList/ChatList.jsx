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

  render() {
    // const { chats, newChat, navigate, removeChat } = this.props;

    // return (
    //   <div className="chat-list">
    //     <List className="list">
    //       { chats.map((chat) => {
    //         return (
    //           <div key={ chat.id }>
    //             <button onClick={ () => navigate(chat.id) } className="list_link" >
    //               <ListItem style={{ textAlign: "center" }}>
    //                 <ListItemText primary={ chat.name } />
    //               </ListItem>
    //             </button>
    //             <button onClick={ () => removeChat(chat.id) }>remove</button>
    //           </div>
    //         )
    //       })}
    //     </List>
    //     <button onClick={ newChat }>New chat</button>
    //   </div>
    // )
    const { chats, newChat, navigate } = this.props;

    return (
      <div className="chat-list">
        <List className="list">
          { chats.map((chat) => {
            return (
              <div key={ chat.id }>
                <button onClick={ () => navigate(chat.id) } className="list_link" >
                  <ListItem style={{ textAlign: "center" }}>
                    <ListItemText primary={ chat.name } />
                  </ListItem>
                </button>
              </div>
            )
          })}
        </List>
        <button onClick={ newChat }>New chat</button>
      </div>
    )
  }
}

export { ChatList };

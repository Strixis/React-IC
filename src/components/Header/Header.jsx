import './Header.less';

import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
  render() {
    const { chatName, user } = this.props;
    
    return <div className="header">
      <Link to="/" className="logo"></Link>
      <span className="header_thing">This is { chatName }</span>
      <div className="profile">
        <span className="profile_thing">Name: { user.name }</span>
        <span className="profile_thing">Role: { user.role }</span>
        <Link to="/profile">
          <p>To Profile</p>
        </Link>
      </div>
    </div>
  }
}

export { Header };

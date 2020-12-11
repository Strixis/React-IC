import './Header.less';

import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
  render() {
    const { chatName } = this.props;
    
    return <div className="header">
      <Link to="/" className="logo"></Link>
      <span className="header_thing">This is { chatName }</span>
      <Link to="/profile">
        <p className="header_thing">To Profile</p>
      </Link>
    </div>
  }
}

export { Header };

import './Header.less';

import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
  render() {
    const { chatName } = this.props;
    return <div className="header">
      <span>This is { chatName }</span>
      <Link to="/profile">
        <p>To Profile</p>
      </Link>
    </div>
  }
}

export { Header };

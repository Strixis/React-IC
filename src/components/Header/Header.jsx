import './Header.less';

import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
  render() {
    return <div className="header">
      <span>This is header</span>
      <Link to="/profile">
        <p>To Profile</p>
      </Link>
    </div>
  }
}

export { Header };

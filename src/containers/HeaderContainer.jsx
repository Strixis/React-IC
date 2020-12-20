import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import { Header } from 'components/Header';

class HeaderContainer extends PureComponent {
  render() {
    const { user, chatName } = this.props;
    return (
      <Header chatName={ chatName } user={ user } />
    )
  }
};

function mapStateToProps(state, ownProps) {
  const chats = state.chats.get('entries');
  const user = state.profile.toJS();

  const { match } = ownProps;

  let chatName = 'Home';

  if (match && chats.has(match.params.id)) {
    chatName = chats.getIn([match.params.id, 'name']);
  }

  return {
    chatName,
    user
  }
};

const HeaderRedux = connect(mapStateToProps)(HeaderContainer);

export { HeaderRedux };

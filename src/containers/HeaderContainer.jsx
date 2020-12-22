import React, { PureComponent } from 'react';
import { connect } from 'react-redux';

import { Header } from 'components/Header';
import { getProfile } from 'actions/profile'

class HeaderContainer extends PureComponent {
  componentDidMount() {
    const { listenProfile } = this.props;

    listenProfile();
  }

  render() {
    const { user, chatName  } = this.props;
    return (
      <Header chatName={ chatName } user={ user } />
    )
  }
};

function mapStateToProps(state, ownProps) {
  const chats = state.chats.get('entries');
  const user = state.profile.get('entries').toJS();

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

function mapDispatchToProps(dispatch) {
  return {
    listenProfile: () => dispatch(getProfile())
  }
}

const HeaderRedux = connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);

export { HeaderRedux };

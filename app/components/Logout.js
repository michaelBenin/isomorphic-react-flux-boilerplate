import React from 'react';
import SessionActions from '../actions/SessionActions';

class Logout extends React.Component {
  componentDidMount() {
    SessionActions.logout();
    this.context.router.transitionTo('/');
  }

  render() {
    return null;
  }
}

Logout.contextTypes = {
  router: React.PropTypes.func
};

export default Logout;

import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as usersActions from '../actions/usersActions';
import * as routesActions from '../actions/routesActions';
import Home from '../components/Home';

class HomeContainer extends Component {
  render() {
    return <Home html={'<h1>NativeScript AppSync service</h1>\n' +
      '<p>After <a href="./login">logging in</a>, you can...</p>\n' +
      '<h4><a href="./accessKeys">go here to get an access key</a></h4>\n' +
      '<h4><a href="./apps">or go here to manage your apps</a></h4>\n' +
      '<h1>Enjoy! 🚀</h1>'} />;
  }
}

function mapStateToProps(state, ownProps) {
  return {};
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    actions: bindActionCreators(Object.assign({}, usersActions, routesActions), dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HomeContainer)

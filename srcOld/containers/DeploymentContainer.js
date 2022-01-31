import React, {PropTypes, Component} from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import _ from 'lodash';
import * as usersActions from '../actions/usersActions';
import * as authActions from '../actions/authActions';
import * as routesActions from '../actions/routesActions';
import Deployment from '../components/Deployment';

class DeploymentContainer extends Component {
  static propTypes = {
    appName: PropTypes.string,
    deploymentName: PropTypes.string,
  };

  static defaultProps = {
    appName: '',
    deploymentName: '',
  };

  componentDidMount() {
    if (!_.get(this.props, 'auth.isAuth')) {
      let path = location.pathname;
      if (!_.isEmpty(location.search)) {
        path += `?${location.search}`
      }
      this.props.actions.setBackHistory(path);
      this.props.actions.fetchAuth(true);
    }
  }
  render() {
    const {appName, deploymentName, actions} = this.props;
    return (
      <Deployment appName={appName} deploymentName={deploymentName} />
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    'auth': _.get(state, 'auth', {}),
    'products': _.get(state, 'products', {})
  };
}

function mapDispatchToProps(dispatch, ownProps) {
  return {
    actions: bindActionCreators(Object.assign({}, usersActions, authActions, routesActions), dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DeploymentContainer)

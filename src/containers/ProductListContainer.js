import React, {PropTypes, Component} from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import _ from 'lodash';
import * as usersActions from '../actions/usersActions';
import * as authActions from '../actions/authActions';
import * as routesActions from '../actions/routesActions';
import * as productsActions from '../actions/productsActions';
import ProductList from '../components/ProductList';
import PopAddAppContainer from './PopAddAppContainer';

class ProductListContainer extends Component {
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
    const {products, actions } = this.props;
    return (
      <div>
        <PopAddAppContainer/>
        <ProductList
          isFetching={_.get(products, 'isFetching')}
          rs={_.get(products, 'rs')}
          popAddApp={actions.showPopAddApp}
        />
      </div>
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
    actions: bindActionCreators(Object.assign({}, usersActions, authActions, routesActions, productsActions), dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductListContainer)

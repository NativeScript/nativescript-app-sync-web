import _ from 'lodash';

import {
  REQUEST_PRODUCTS,
  RECEIVE_PRODUCTS,
  SHOW_POP_ADD_APP,
  CLOSE_POP_ADD_APP,
  POP_ADD_APP_INPUT,
  REQUEST_ADD_PRODUCTS,
  RECEIVE_ADD_PRODUCTS,
  REQUEST_PRODUCTS_DEPLOYMENTS,
  RECEIVE_PRODUCTS_DEPLOYMENTS,
} from '../actions/actionTypes';

export function products(state = {}, action) {
  switch (action.type) {
    case REQUEST_PRODUCTS:
      return Object.assign({}, state, {isFetching: true});

    case RECEIVE_PRODUCTS:
      return Object.assign({}, state, {
        isFetching: false,
        rs: _.get(action, 'payload.apps')
      });

    default :
      return state;
  }
}

export function deployments(state = {rs:{}}, action) {
    let payload = _.get(action, 'payload');
    switch (action.type) {
      case REQUEST_PRODUCTS_DEPLOYMENTS:
        return Object.assign({}, state, {isFetching: true});

      case RECEIVE_PRODUCTS_DEPLOYMENTS:
        var data = Object.assign({}, state, {isFetching: false});
        var appName = _.get(payload, 'appName');
        _.set(data, `rs.${appName}`, _.get(payload, 'results.deployments'));
        return data;

      default :
        return state;
    }
}

export function addProducts(state = {}, action) {
  let payload = action.payload;
  switch (action.type) {
    case SHOW_POP_ADD_APP:
      return {showModal: true};

    case CLOSE_POP_ADD_APP:
      return Object.assign({}, state, {showModal: false});

    case POP_ADD_APP_INPUT:
      var appName = _.get(payload, 'appName');
      var os = _.get(payload, 'os');
      var platform = _.get(payload, 'platform');
      if (appName !== undefined) {
        const REGEX = /^\w+$/;
        if (REGEX.test(appName)) {
          _.set(payload, 'isShowNameError', false);
        } else {
          _.set(payload, 'isShowNameError', true);
        }
      }
      if (os !== undefined) {
        if (_.indexOf(['iOS', 'Android', 'Windows'], os) !== -1 ) {
          _.set(payload, 'isShowOSError', false);
        } else {
          _.set(payload, 'isShowOSError', true);
        }
      }
      if (platform !== undefined) {
        if (_.indexOf(['React-Native', 'Cordova', 'NativeScript'], platform) !== -1 ) {
          _.set(payload, 'isShowPlatformError', false);
        } else {
          _.set(payload, 'isShowPlatformError', true);
        }
      }
      return Object.assign({}, state, payload);

    case REQUEST_ADD_PRODUCTS:
      return Object.assign({}, state, {isOnSubmiting: true});

    case RECEIVE_ADD_PRODUCTS:
      if (_.get(payload, 'status') == 'OK') {
        return {isOnSubmiting: false};
      } else {
        return Object.assign({}, state, {isOnSubmiting: false, errorTip: _.get(payload, 'errorMessage')});
      }

    default :
      return state;
  }
}

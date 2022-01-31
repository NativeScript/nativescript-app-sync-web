
import React from 'react';
import LayoutContainer from '../../containers/LayoutContainer';

const users = {

  path: '/users',

  async action({store}) {
    if (process.env.BROWSER) {

    }
    const ChangePasswordContainer = await require.ensure([], require => require('../../containers/ChangePasswordContainer').default, 'changePassword');
    return {
      title: 'Change password',
      chunk: 'changePassword',
      component: <LayoutContainer><ChangePasswordContainer /></LayoutContainer>,
    };
  },

};

const settings = {

  path: '/users/settings',

  async action({store}) {
    if (process.env.BROWSER) {

    }
    const ChangePasswordContainer = await require.ensure([], require => require('../../containers/ChangePasswordContainer').default, 'changePassword');
    return {
      title: 'Change password',
      chunk: 'changePassword',
      component: <LayoutContainer><ChangePasswordContainer /></LayoutContainer>,
    };
  },

};

export { users as default, settings };

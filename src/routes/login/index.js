import React from 'react';
import Layout from '../../components/Layout';
import LogoutContainer from '../../containers/LogoutContainer';

const login = {
  path: '/login',

  async action({ store }) {
    if (process.env.BROWSER) {

    }
    const LoginContainer = await require.ensure([], require => require('../../containers/LoginContainer').default, 'login');
    return {
      title: 'Log in',
      chunk: 'login',
      component: <Layout><LoginContainer /></Layout>,
    };
  },

};

const logout = {

  path: '/logout',

  async action() {
    return {
      title: 'Log out',
      component: <Layout><LogoutContainer /></Layout>,
    };
  },
};

export { login as default, logout };

/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React from 'react';
import fetch from '../../core/fetch';
import LayoutContainer from '../../containers/LayoutContainer';
import restApi from '../../network/RestApi';

export default {

  path: '/',

  async action() {
    const data = '<h1 id="nativescriptappsyncservice">NativeScript AppSync service</h1>\n' +
      '<p>After <a href="./login">logging in</a>, you can...</p>\n' +
      '<h4 id="goheretogetanaccesskeyaccesskeys"><a href="./accessKeys">go here to get an access key</a></h4>\n' +
      '<h4 id="orgoheretomanageyourappsapps"><a href="./apps">or go here to manage your apps</a></h4>\n' +
      '<h1 id="enjoy">Enjoy! 🚀</h1>';

    const HomeContainer = await require.ensure([], require => require('../../containers/HomeContainer').default, 'home');
    return {
      title: 'AppSync Server',
      chunk: 'home',
      component: <LayoutContainer><HomeContainer html={data} /></LayoutContainer>,
    };
  },

  async actionORIG() {
    const resp = await fetch(restApi.buildWebUsageUrl(), {
      method: 'get',
      timeout: 5000,
      headers: {
        Accept: 'text/html',
        'Content-Type': 'text/html',
      },
    });
    if (resp.status !== 200) throw new Error(resp.statusText);
    const data = await resp.text();
    const HomeContainer = await require.ensure([], require => require('../../containers/HomeContainer').default, 'home');
    return {
      title: 'AppSync Server',
      chunk: 'home',
      component: <LayoutContainer><HomeContainer html={data} /></LayoutContainer>,
    };
  },
};

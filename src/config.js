/* eslint-disable max-len */

export const port = process.env.PORT || 3001;
// export const host = process.env.WEBSITE_HOSTNAME || `localhost:${port}`;
export const host = process.env.WEBSITE_HOSTNAME || 'https://appsync-server.nativescript.org';

export const analytics = {

  // https://analytics.google.com/
  google: {
    trackingId: process.env.GOOGLE_TRACKING_ID, // UA-XXXXX-X
  },

};

export const common = {
  api: {
    URL: 'https://appsync-server.nativescript.org', // production code-push-server address
    devURL: 'https://appsync-server.nativescript.org', // development code-push-server address
  },
};

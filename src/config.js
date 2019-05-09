/* eslint-disable max-len */

export const port = process.env.PORT || 3001;
// export const host = process.env.WEBSITE_HOSTNAME || `localhost:${port}`;
export const host = process.env.WEBSITE_HOSTNAME || 'https://nativescript-codepush-server.herokuapp.com';

export const analytics = {

  // https://analytics.google.com/
  google: {
    trackingId: process.env.GOOGLE_TRACKING_ID, // UA-XXXXX-X
  },

};

export const common = {
  api: {
    URL: 'https://nativescript-codepush-server.herokuapp.com', // production code-push-server address
    devURL: 'https://nativescript-codepush-server.herokuapp.com', // development code-push-server address
  },
};

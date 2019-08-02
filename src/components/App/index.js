if (__DEV__ && process.env.BROWSER && false) {
  module.exports = require('./App.dev');
} else {
  module.exports = require('./App.prod');
}

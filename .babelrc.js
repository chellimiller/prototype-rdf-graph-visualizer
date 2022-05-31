/**
 * This is the configuration for {@link https://babeljs.io/ Babel}.
 *
 * Babel makes it easy to support older browsers.
 * It does this by transforming code and adding polyfills.
 *
 * Since it is difficult and time-consuming to account for all browser versions,
 * tools like Babel are essential for creating reliable web apps.
 *
 * @see {@link https://babeljs.io/docs/en/config-files Configuring Babel}
 * @type {Object}
 */
const config = {
  presets: [
    // This preset allows you to use the latest JS features without
    //  needing to micromanage syntax transforms required by your target browser(s).
    ['@babel/preset-env'],
  ],
};

module.exports = config;

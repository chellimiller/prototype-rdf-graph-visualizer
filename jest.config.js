/**
 * This is the configuration for {@link https://jestjs.io/ Jest}.
 *
 * Jest is a testing framework.
 * It is ideal for unit tests and some integration tests.
 *
 * Testing code is important for reliability.
 * Good tests ensure that bugfixes stay fixed
 * and that core functionality behaves as expected.
 *
 * @see {@link https://jestjs.io/docs/configuration Configuring Jest}
 * @type {Object}
 */
const config = {
  // Specify that the test environment should have a DOM.
  // This is important for testing a web app that runs in a browser.
  testEnvironment: 'jsdom',
  // Specify that code coverage should be collected.
  // Code coverage shows how many lines, functions, and branches are covered by tests.
  collectCoverage: true,
  coverageThreshold: {
    // Specifies all global coverage at 100%
    // Though code coverage doesn't guarantee that every case is tested,
    //   it is a good metric for showing how testable the code is.
    // 100% code coverage is an easy metric that prevents unreachable code
    //   and ensures that important tests aren't skipped due to difficulty.
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100,
    },
  },
  transform: {
    // Specify that all JS files should be transformed with Babel.
    '^.+\\.js$': 'babel-jest',
    // Specify that CSS files should be stubbed.
    '.+\\.css$': 'jest-transform-stub',
  },
};

module.exports = config;

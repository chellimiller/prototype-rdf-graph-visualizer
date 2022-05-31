import registerServiceWorker from './registerServiceWorker';

describe('registerServiceWorker', () => {
  // This will run before all other tests in this test suite
  beforeAll(() => {
    // Allow us to set the value of window.navigator
    Object.defineProperty(window, 'navigator', {
      value: {},
      writable: true,
    });
  });

  it('should not throw error if browser does not support service workers', async () => {
    // Arrange
    window.navigator = {};

    // Act
    await registerServiceWorker();

    // Assert - Nothing needed since we just wanted to verify that no error was thrown.
  });

  it('should register service worker when supported by browser', async () => {
    // Arrange
    window.navigator = {
      serviceWorker: {
        register: jest.fn().mockImplementation(() => Promise.resolve({})),
      },
    };

    // Act
    await registerServiceWorker();

    // Assert
    expect(window.navigator.serviceWorker.register).toHaveBeenCalledWith(
      '/service-worker.js'
    );
  });

  it('should reject when service worker cannot be registered', async () => {
    // Arrange
    const spyConsoleError = jest
      .spyOn(console, 'error')
      .mockImplementation(() => {});
    window.navigator = {
      serviceWorker: {
        register: jest.fn().mockImplementation(() => Promise.reject('Foo')),
      },
    };

    // Act
    await registerServiceWorker();

    // Assert
    expect(window.navigator.serviceWorker.register).toHaveBeenCalledWith(
      '/service-worker.js'
    );
    expect(spyConsoleError).toHaveBeenCalledWith(
      'Cannot register Service Worker:',
      'Foo'
    );

    // Teardown
    spyConsoleError.mockRestore();
  });
});

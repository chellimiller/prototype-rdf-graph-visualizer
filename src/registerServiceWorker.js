/**
 * Registers a service worker if supported by the browser.
 *
 * @return {Promise<void>}
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API/Using_Service_Workers Using Service Workers}
 */
async function registerServiceWorker() {
  if ('serviceWorker' in navigator) {
    try {
      await navigator.serviceWorker.register('/service-worker.js');
    } catch (error) {
      console.error('Cannot register Service Worker:', error);
    }
  }
}

export default registerServiceWorker;

// Ensure that the styles from index.css are included.
import './index.css';
import createForceGraph from './graph/createForceGraph';
import registerServiceWorker from './registerServiceWorker';

/**
 * Retrieve the root element for the app.
 *
 * @see `/public/index.html`
 */
const app = document.getElementById('app');

/**
 * Header element that will contain the "Hello World!" text.
 */
const header = document.createElement('h1');
header.innerText = 'Hello World!';

/**
 * Graph element
 */
const graph = createForceGraph();

// Add the header to the app.
app.appendChild(header);
app.appendChild(graph.element);

window.addEventListener('load', registerServiceWorker);

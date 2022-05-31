import N3 from 'n3';
import extractGraphData from './extractGraphData';
import populateStore from './populateStore';
import createGraphVisualization from './createGraphVisualization';

/**
 * @typedef {Object} Graph
 * @property {HTMLElement} element - HTML element for the graph.
 * @function add - Add a quad to the graph.
 * @function delete - Delete a quad from the graph.
 * @function has - Check if the dataset includes the specified quad.
 */

/**
 * @typedef GraphOptions
 * @property {import('./createGraphVisualization').GraphVisualization} visualization - Visualizer that will render the graph data.
 * @function
 */

/**
 * @return {Graph}
 */
function createGraph(options = {}) {
  const { visualization = createGraphVisualization() } = options;

  const store = new N3.Store();

  function refreshGraphData() {
    visualization.instance.graphData(extractGraphData(store));
  }

  /** @type {Graph} */
  const graph = Object.freeze({
    get element() {
      return visualization.element;
    },
    add(quad) {
      store.add(quad);
      refreshGraphData();
      return graph;
    },
    delete(quad) {
      store.delete(quad);
      refreshGraphData();
      return graph;
    },
    has(quad) {
      return store.has(quad);
    },
  });

  populateStore(store);
  refreshGraphData();

  return graph;
}

export default createGraph;

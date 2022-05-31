import ForceGraph from 'force-graph';

/**
 * @typedef ForceGraph
 * @property {HTMLDivElement} element - HTML element for the graph.
 * @property {import('force-graph').ForceGraphInstance} instance - Instance of the ForceGraph.
 * @property {string} id - ID of the graph element.
 */

/**
 * @typedef ForceGraphOptions
 * @property {string} id - ID of the graph element.
 * @property {import('force-graph').GraphData} data - Data to add to the graph.
 */

/**
 * @param {Object} options - Options for generating the dummy data.
 * @param {number} options.N - Number of nodes
 * @return {import('force-graph').GraphData}
 */
function createDummyGraphData(options = {}) {
  const { N = 50 } = options;

  return {
    nodes: [...Array(N).keys()].map((i) => ({ id: i })),
    links: [...Array(N).keys()]
      .filter((id) => id)
      .map((id) => ({
        source: id,
        target: Math.round(Math.random() * (id - 1)),
      })),
  };
}

/**
 * Create a new force graph.
 *
 * @param {ForceGraphOptions} options - Options for creating the force graph.
 * @return {ForceGraph}
 */
function createForceGraph(options = {}) {
  const { id = 'graph', data = createDummyGraphData() } = options;

  const element = document.createElement('div');
  element.setAttribute('id', id);

  const instance = new ForceGraph();
  instance(element).graphData(data);

  return {
    id,
    element,
    instance,
  };
}

export default createForceGraph;

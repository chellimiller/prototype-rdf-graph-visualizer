import N3 from 'n3';

/**
 * Extracts graph data from a store.
 *
 * @param {N3.Store} store
 * @return {import('force-graph').GraphData}
 */
function extractGraphData(store) {
  const nodesMap = new Map();
  const links = [];

  const toLabel = (id) => id.split(':').pop();

  const addNode = ({ id }, group = { id: 'default' }) => {
    if (!nodesMap.has(id)) {
      nodesMap.set(id, { id, label: toLabel(id), group: group.id });
    }
  };

  store.forEach((quad) => {
    addNode(quad.subject, quad.graph);
    addNode(quad.object, quad.graph);
    links.push({
      label: toLabel(quad.predicate.id),
      source: quad.subject.id,
      target: quad.object.id,
    });
  });

  const nodes = Array.from(nodesMap.values());

  return {
    nodes,
    links,
  };
}

export default extractGraphData;

import ForceGraph from 'force-graph';

/**
 * @typedef GraphVisualization
 * @property {HTMLElement} element - HTML element for the graph.
 * @property {string} id - ID of the graph element.
 * @property {import('force-graph').ForceGraphInstance} instance - Instance of the ForceGraph
 */

/**
 * @typedef GraphVisualizationOptions
 * @property {string} id - ID of the graph element.
 */

/**
 * Create a new graph visualization.
 *
 * @param {GraphVisualizationOptions} options - Options for creating the force graph.
 * @return {GraphVisualization}
 */
function createGraphVisualization(options = {}) {
  const { id = 'graph' } = options;

  const element = document.createElement('div');
  element.setAttribute('id', id);

  const instance = new ForceGraph();
  instance(element)
    .nodeId('id')
    .nodeLabel('label')
    .linkLabel('label')
    .nodeAutoColorBy('group')
    .nodeCanvasObject((node, ctx, globalScale) => {
      const { label } = node;
      const fontSize = 20 / globalScale;
      ctx.font = `${fontSize}px Sans-Serif`;
      const textWidth = ctx.measureText(label).width;
      const bckgDimensions = [textWidth, fontSize].map(
        (n) => n + fontSize * 0.2
      ); // some padding

      ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
      ctx.fillRect(
        node.x - bckgDimensions[0] / 2,
        node.y - bckgDimensions[1] / 2,
        ...bckgDimensions
      );

      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillStyle = node.color;
      ctx.fillText(label, node.x, node.y);

      node.__bckgDimensions = bckgDimensions; // to re-use in nodePointerAreaPaint
    })
    .nodePointerAreaPaint((node, color, ctx) => {
      ctx.fillStyle = color;
      const bckgDimensions = node.__bckgDimensions;
      bckgDimensions &&
        ctx.fillRect(
          node.x - bckgDimensions[0] / 2,
          node.y - bckgDimensions[1] / 2,
          ...bckgDimensions
        );
    })
    .linkCanvasObjectMode(() => 'after')
    .linkCanvasObject((link, ctx) => {
      const MAX_FONT_SIZE = 4;

      const { label, source, target } = link;

      // ignore unbound links
      if (typeof source !== 'object' || typeof target !== 'object') return;

      // calculate label positioning
      const textPos = Object.assign(
        ...['x', 'y'].map((c) => ({
          [c]: source[c] + (target[c] - source[c]) / 2, // calc middle point
        }))
      );

      const center = { x: target.x - source.x, y: target.y - source.y };

      const maxTextLength = Math.sqrt(
        Math.pow(center.x, 2) + Math.pow(center.y, 2)
      );

      let textAngle = Math.atan2(center.y, center.x);
      // maintain label vertical orientation for legibility
      if (textAngle > Math.PI / 2) textAngle = -(Math.PI - textAngle);
      if (textAngle < -Math.PI / 2) textAngle = -(-Math.PI - textAngle);

      // estimate fontSize to fit in link length
      ctx.font = '1px Sans-Serif';
      const fontSize = Math.min(
        MAX_FONT_SIZE,
        maxTextLength / ctx.measureText(label).width
      );
      ctx.font = `${fontSize}px Sans-Serif`;
      const textWidth = ctx.measureText(label).width;
      const bckgDimensions = [textWidth, fontSize].map(
        (n) => n + fontSize * 0.2
      ); // some padding

      // draw text label (with background rect)
      ctx.save();
      ctx.translate(textPos.x, textPos.y);
      ctx.rotate(textAngle);

      ctx.fillStyle = 'rgba(255, 255, 255, 0.8)';
      ctx.fillRect(
        -bckgDimensions[0] / 2,
        -bckgDimensions[1] / 2,
        ...bckgDimensions
      );

      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillStyle = 'darkgrey';
      ctx.fillText(label, 0, 0);
      ctx.restore();
    })
    .linkDirectionalArrowLength(2)
    .linkDirectionalArrowRelPos(1);

  /** @type {GraphVisualization} */
  const visualization = Object.freeze({
    get id() {
      return id;
    },
    get element() {
      return element;
    },
    get instance() {
      return instance;
    },
  });

  return visualization;
}

export default createGraphVisualization;

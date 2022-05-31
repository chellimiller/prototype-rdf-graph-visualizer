import createGraphVisualization from './createGraphVisualization';

jest.mock(
  'force-graph',
  () => ({
    __esModule: true,
    default: function () {
      function FakeForceGraph() {
        return FakeForceGraph;
      }

      FakeForceGraph.graphData = () => FakeForceGraph;
      FakeForceGraph.nodeId = () => FakeForceGraph;
      FakeForceGraph.nodeLabel = () => FakeForceGraph;
      FakeForceGraph.linkLabel = () => FakeForceGraph;

      return FakeForceGraph;
    },
  }),
  {
    virtual: true,
  }
);

describe('createGraphVisualization', () => {
  it('should create graph with no options', async () => {
    // Act
    const result = createGraphVisualization();

    // Assert
    expect(result).not.toBeNull();
  });

  it('should allow custom id', async () => {
    // Arrange
    const id = 'foo-bar';

    // Act
    const result = createGraphVisualization({ id });

    // Assert
    expect(result.id).toEqual(id);
  });
});

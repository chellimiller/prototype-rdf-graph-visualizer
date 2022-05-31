import createForceGraph from './createForceGraph';

jest.mock(
  'force-graph',
  () => ({
    __esModule: true,
    default: function () {
      function FakeForceGraph() {
        return FakeForceGraph;
      }

      FakeForceGraph.graphData = () => FakeForceGraph;

      return FakeForceGraph;
    },
  }),
  {
    virtual: true,
  }
);

describe('createForceGraph', () => {
  it('should create graph with no options', async () => {
    // Act
    const result = createForceGraph();

    // Assert
    expect(result).not.toBeNull();
  });

  it('should allow custom id', async () => {
    // Arrange
    const id = 'foo-bar';

    // Act
    const result = createForceGraph({ id });

    // Assert
    expect(result.id).toEqual(id);
  });

  it('should allow custom data', async () => {
    // Arrange
    const N = 100;
    const data = {
      nodes: [...Array(N).keys()].map((i) => ({ id: i })),
      links: [...Array(N).keys()]
        .filter((id) => id)
        .map((id) => ({
          source: id,
          target: Math.round(Math.random() * (id - 1)),
        })),
    };

    // Act
    const result = createForceGraph({ data });

    // Assert
    expect(result).not.toBeNull();
  });
});

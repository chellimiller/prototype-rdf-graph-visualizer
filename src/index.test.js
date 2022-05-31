describe('index.js', () => {
  it('should add h1 element with "Hello World" text', () => {
    // Arrange
    document.body.innerHTML = `<div id="app"></div>`;

    // Act
    require('./index');
    const app = document.getElementById('app');
    const [header] = app.getElementsByTagName('h1');

    // Assert
    expect(header).not.toBeNull();
    expect(header.innerText).toBe('Hello World!');
  });
});

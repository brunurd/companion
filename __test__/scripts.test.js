const fs = require('fs');
const { resolve } = require('path');

describe('scripts test', () => {
  let html;

  beforeAll(() => {
    html = fs.readFileSync(resolve(__dirname, '..', 'public', 'index.html')).toString();
  });

  it('index.html file is loaded', () => {
    expect(html).toBeDefined();
    expect(typeof html).toBe('string');
  });
});
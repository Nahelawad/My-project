// tests/sample.test.js

test('sample test', () => {
    expect(1 + 1).toBe(2);
  });
  
  test('string concatenation', () => {
    expect('Hello' + ' World').toBe('Hello World');
  });
  
  test('array contains element', () => {
    const numbers = [1, 2, 3, 4, 5];
    expect(numbers).toContain(3);
  });
  
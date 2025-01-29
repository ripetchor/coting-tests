const { reverse } = require('../src/reverse');

describe('reverse', () => {
  test.skip('should reverse an array of strings', () => {
    const array = ['a', 'b', 'c', 'd'];
    const result = reverse.call(array);

    expect(result).toEqual(['d', 'c', 'b', 'a']);
    expect(result).toBe(array);
  });

  test.skip('should reverse an array of numbers', () => {
    const array = [1, 2, 3, 4, 5];
    const result = reverse.call(array);

    expect(result).toEqual([5, 4, 3, 2, 1]);
    expect(result).toBe(array);
  });

  test.skip('should reverse an array with an odd number of elements', () => {
    const array = [1, 2, 3, 4, 5];
    const result = reverse.call(array);

    expect(result).toEqual([5, 4, 3, 2, 1]);
    expect(result).toBe(array);
  });

  test.skip('should reverse an array with an even number of elements', () => {
    const array = [1, 2, 3, 4, 5, 6];
    const result = reverse.call(array);

    expect(result).toEqual([6, 5, 4, 3, 2, 1]);
    expect(result).toBe(array);
  });

  test.skip('should return the same array instance', () => {
    const array = [1, 2, 3];
    const result = reverse.call(array);

    expect(result).toBe(array);
    expect(result).toBe(array);
  });

  test.skip('should reverse an array with duplicate values', () => {
    const array = [1, 2, 3, 2, 1];
    const result = reverse.call(array);

    expect(result).toEqual([1, 2, 3, 2, 1]);
    expect(result).toBe(array);
  });

  test.skip('should return an empty array when reversing an empty array', () => {
    const array = [];
    const result = reverse.call(array);

    expect(result).toEqual([]);
    expect(result).toBe(array);
  });

  test.skip('should return the same array when reversing a single-element array', () => {
    const array = [42];
    const result = reverse.call(array);

    expect(result).toEqual([42]);
    expect(result).toBe(array);
  });

  test.skip('should reverse an array with mixed types', () => {
    const array = [1, 'a', true, null];
    const result = reverse.call(array);

    expect(result).toEqual([null, true, 'a', 1]);
    expect(result).toBe(array);
  });

  test.skip('should throw TypeError when called on a null object', () => {
    expect(() => reverse.call({})).toThrow(TypeError);
  });
});

const { flat } = require('../src/flat');

describe('flat', () => {
  test.skip('should flatten an array with one level of nested arrays', () => {
    const array = [1, 2, [3, 4], 5];
    const result = flat.call(array, 1);

    expect(result).toEqual([1, 2, 3, 4, 5]);
  });

  test.skip('should flatten an array with multiple levels of nested arrays', () => {
    const array = [1, [2, [3, [4, 5]]]];
    const result = flat.call(array, 2);

    expect(result).toEqual([1, 2, 3, [4, 5]]);
  });

  test.skip('should flatten an array with deep nesting', () => {
    const array = [1, [2, [3, [4, [5]]]]];
    const result = flat.call(array, 3);

    expect(result).toEqual([1, 2, 3, 4, [5]]);
  });

  test.skip('should flatten an array with no nesting', () => {
    const array = [1, 2, 3, 4];
    const result = flat.call(array, 1);

    expect(result).toEqual([1, 2, 3, 4]);
  });

  test.skip('should handle empty arrays correctly', () => {
    const array = [1, [], 2, [], 3];
    const result = flat.call(array, 1);

    expect(result).toEqual([1, 2, 3]);
  });

  test.skip('should handle deeply nested arrays and flatten them completely', () => {
    const array = [1, [2, [3, [4, [5]]]]];
    const result = flat.call(array, Infinity);

    expect(result).toEqual([1, 2, 3, 4, 5]);
  });

  test.skip('should return an empty array when the input is an empty array', () => {
    const array = [];
    const result = flat.call(array, 1);

    expect(result).toEqual([]);
  });

  test.skip('should return the same array when flattening an already flat array', () => {
    const array = [1, 2, 3, 4];
    const result = flat.call(array, 1);

    expect(result).toEqual([1, 2, 3, 4]);
  });

  test.skip('should handle arrays with undefined and null values correctly', () => {
    const array = [1, [2, undefined, null], 3];
    const result = flat.call(array, 1);

    expect(result).toEqual([1, 2, undefined, null, 3]);
  });

  test.skip('should flatten arrays of mixed types (numbers, strings, objects)', () => {
    const array = [1, 'a', [2, 'b', [3, 'c']], { key: 'value' }];
    const result = flat.call(array, 2);

    expect(result).toEqual([1, 'a', 2, 'b', 3, 'c', { key: 'value' }]);
  });

  test.skip('should throw TypeError when called on a null object', () => {
    expect(() => flat.call(null)).toThrow(TypeError);
  });
});

const { concat } = require('../src/concat');

describe('concat', () => {
  test('should concatenate two arrays', () => {
    const array1 = [1, 2, 3];
    const array2 = [4, 5, 6];
    const result = concat.call(array1, array2);

    expect(result).toEqual([1, 2, 3, 4, 5, 6]);
  });

  test('should concatenate an array and a value', () => {
    const array = [1, 2, 3];
    const result = concat.call(array, 4, 5);

    expect(result).toEqual([1, 2, 3, 4, 5]);
  });

  test('should concatenate multiple arrays and values', () => {
    const array1 = [1, 2];
    const array2 = [3, 4];
    const result = concat.call(array1, array2, 5, [6, 7]);

    expect(result).toEqual([1, 2, 3, 4, 5, 6, 7]);
  });

  test('should not modify the original array', () => {
    const array1 = [1, 2, 3];
    const original = [...array1];

    concat.call(array1, [4, 5]);

    expect(array1).toEqual(original);
  });

  test('should return a new array even if the original array is empty', () => {
    const result = concat.call([], 1, 2, 3);

    expect(result).toEqual([1, 2, 3]);
  });

  test('should concatenate arrays with non-array values', () => {
    const array = [1, 2, 3];
    const result = concat.call(array, 'a', true, null);

    expect(result).toEqual([1, 2, 3, 'a', true, null]);
  });

  test('should return an empty array when concatenating empty arrays and values', () => {
    const result = concat.call([], [], [], []);

    expect(result).toEqual([]);
  });

  test('should handle nested arrays correctly', () => {
    const array = [1, 2, [3, 4]];
    const result = concat.call(array, [5, 6]);

    expect(result).toEqual([1, 2, [3, 4], 5, 6]);
  });

  test('should concatenate an array with another array with mixed types', () => {
    const array = [1, 'a', true];
    const result = concat.call(array, [false, null, 3]);

    expect(result).toEqual([1, 'a', true, false, null, 3]);
  });

  test('should throw TypeError when called on a null object', () => {
    expect(() => concat.call(null)).toThrow(TypeError);
  });
});

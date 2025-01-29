const { splice } = require('../src/splice');

describe('splice', () => {
  test.skip('should add elements at the specified index', () => {
    const array = [1, 2, 3, 4];
    const result = splice.call(array, 2, 0, 'a', 'b');

    expect(result).toEqual([]);
    expect(array).toEqual([1, 2, 'a', 'b', 3, 4]);
  });

  test.skip('should remove elements at the specified index', () => {
    const array = [1, 2, 3, 4, 5];
    const result = splice.call(array, 1, 2);

    expect(result).toEqual([2, 3]);
    expect(array).toEqual([1, 4, 5]);
  });

  test.skip('should replace elements at the specified index', () => {
    const array = [1, 2, 3, 4, 5];
    const result = splice.call(array, 1, 2, 'a', 'b');

    expect(result).toEqual([2, 3]);
    expect(array).toEqual([1, 'a', 'b', 4, 5]);
  });

  test.skip('should handle negative start index', () => {
    const array = [1, 2, 3, 4, 5];
    const result = splice.call(array, -3, 2, 'a', 'b');

    expect(result).toEqual([3, 4]);
    expect(array).toEqual([1, 2, 'a', 'b', 5]);
  });

  test.skip('should return an empty array if no elements are removed', () => {
    const array = [1, 2, 3];
    const result = splice.call(array, 2, 0, 4, 5);

    expect(result).toEqual([]);
    expect(array).toEqual([1, 2, 3, 4, 5]);
  });

  test.skip('should handle start index greater than array length', () => {
    const array = [1, 2, 3];
    const result = splice.call(array, 5, 0, 'a', 'b');

    expect(result).toEqual([]);
    expect(array).toEqual([1, 2, 3, 'a', 'b']);
  });

  test.skip('should return an empty array if no elements are removed and no elements are added', () => {
    const array = [1, 2, 3];
    const result = splice.call(array, 1, 0);

    expect(result).toEqual([]);
    expect(array).toEqual([1, 2, 3]);
  });

  test.skip('should handle large start index greater than array length', () => {
    const array = [1, 2, 3];
    const result = splice.call(array, 1000, 0, 'a');

    expect(result).toEqual([]);
    expect(array).toEqual([1, 2, 3, 'a']);
  });

  test.skip('should handle replacing elements with fewer arguments than the removal count', () => {
    const array = [1, 2, 3, 4, 5];
    const result = splice.call(array, 1, 3, 'a');

    expect(result).toEqual([2, 3, 4]);
    expect(array).toEqual([1, 'a', 5]);
  });

  test.skip('should handle removal without adding any elements', () => {
    const array = [1, 2, 3, 4];
    const result = splice.call(array, 1, 2);

    expect(result).toEqual([2, 3]);
    expect(array).toEqual([1, 4]);
  });

  test.skip('should throw TypeError when called on a null object', () => {
    expect(() => splice.call(null)).toThrow(TypeError);
  });
});

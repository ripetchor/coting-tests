const { findIndex } = require('../src/find-index');

const ARRAY = [1, 3, 4, 6];

describe('findIndex', () => {
  test.skip('should return index of first even value', () => {
    const expected = 2;

    function callback(v) {
      return v % 2 === 0;
    }

    const result = findIndex.call(ARRAY, callback);

    expect(result).toBe(expected);
  });

  test.skip('should return index of first odd value', () => {
    const expected = 0;

    function callback(v) {
      return v % 2 !== 0;
    }

    const result = findIndex.call(ARRAY, callback);

    expect(result).toBe(expected);
  });

  test.skip('should return specified index', () => {
    const expected = 3;

    function callback(_, i) {
      return i === 3;
    }

    const result = findIndex.call(ARRAY, callback);

    expect(result).toBe(expected);
  });

  test.skip('should return -1 when value not found', () => {
    const expected = -1;

    function callback(v) {
      return v === 999;
    }

    const result = findIndex.call(ARRAY, callback);

    expect(result).toBe(expected);
  });

  test.skip('should return -1 when array empty', () => {
    const expected = -1;

    function callback(v) {
      return v === 999;
    }

    const result = findIndex.call([], callback);

    expect(result).toBe(expected);
  });

  test.skip('should find the first value greater than 5', () => {
    const expected = 3;

    function callback(v) {
      return v > 5;
    }

    const result = findIndex.call(ARRAY, callback);

    expect(result).toBe(expected);
  });

  test.skip('should return -1 for all negative callback results', () => {
    const expected = -1;

    function callback(v) {
      return v < 0;
    }

    const result = findIndex.call(ARRAY, callback);

    expect(result).toBe(expected);
  });

  test.skip('should return the index of the first value divisible by 3', () => {
    const expected = 1;

    function callback(v) {
      return v % 3 === 0;
    }

    const result = findIndex.call(ARRAY, callback);

    expect(result).toBe(expected);
  });

  test.skip('should find index of the first value equal to 4', () => {
    const expected = 2;

    function callback(v) {
      return v === 4;
    }

    const result = findIndex.call(ARRAY, callback);

    expect(result).toBe(expected);
  });

  test.skip('should find the index of the first string in a mixed array', () => {
    const mixedArray = [1, 'hello', true, 4];
    const expected = 1;

    function callback(v) {
      return typeof v === 'string';
    }

    const result = findIndex.call(mixedArray, callback);

    expect(result).toBe(expected);
  });
});

const { findIndex } = require('../src/find-index');

const ARRAY = [1, 3, 4, 6];

describe('findIndex', () => {
  test('should return index of first even value', () => {
    const expected = 2;

    function callback(v) {
      return v % 2 === 0;
    }

    const result = findIndex.call(ARRAY, callback);

    expect(result).toBe(expected);
  });

  test('should return index of first odd value', () => {
    const expected = 0;

    function callback(v) {
      return v % 2 !== 0;
    }

    const result = findIndex.call(ARRAY, callback);

    expect(result).toBe(expected);
  });

  test('should return specified index', () => {
    const expected = 3;

    function callback(_, i) {
      return i === 3;
    }

    const result = findIndex.call(ARRAY, callback);

    expect(result).toBe(expected);
  });

  test('should return -1 when value not found', () => {
    const expected = -1;

    function callback(v) {
      return v === 999;
    }

    const result = findIndex.call(ARRAY, callback);

    expect(result).toBe(expected);
  });

  test('should return -1 when array empty', () => {
    const expected = -1;

    function callback(v) {
      return v === 999;
    }

    const result = findIndex.call([], callback);

    expect(result).toBe(expected);
  });
});

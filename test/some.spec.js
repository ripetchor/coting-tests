const { some } = require('../src/some');

const ARRAY = [1, 3, 4, 6];

describe('some', () => {
  test.skip('should return true when at least one even number in array', () => {
    const expected = true;

    function callback(v) {
      return v === 4;
    }

    const result = some.call(ARRAY, callback);

    expect(result).toBe(expected);
  });

  test.skip('should return true when at least one odd number in array', () => {
    const expected = true;

    function callback(v) {
      return v === 3;
    }

    const result = some.call(ARRAY, callback);

    expect(result).toBe(expected);
  });

  test.skip('should return false when value not in array', () => {
    const expected = false;

    function callback(v) {
      return v === 999;
    }

    const result = some.call(ARRAY, callback);

    expect(result).toBe(expected);
  });

  test.skip('should return false when array empty', () => {
    const expected = false;

    function callback(v) {
      return v === 3;
    }

    const result = some.call([], callback);

    expect(result).toBe(expected);
  });

  test.skip('should return true for value greater than 5', () => {
    const expected = true;

    function callback(v) {
      return v > 5;
    }

    const result = some.call(ARRAY, callback);

    expect(result).toBe(expected);
  });

  test.skip('should return true for value less than 2', () => {
    const expected = true;

    function callback(v) {
      return v < 2;
    }

    const result = some.call(ARRAY, callback);

    expect(result).toBe(expected);
  });

  test.skip('should return true for values divisible by 2', () => {
    const expected = true;

    function callback(v) {
      return v % 2 === 0;
    }

    const result = some.call(ARRAY, callback);

    expect(result).toBe(expected);
  });

  test.skip('should return false for all values greater than 10', () => {
    const expected = false;

    function callback(v) {
      return v > 10;
    }

    const result = some.call(ARRAY, callback);

    expect(result).toBe(expected);
  });

  test.skip('should return true for first value equal to 1', () => {
    const expected = true;

    function callback(v) {
      return v === 1;
    }

    const result = some.call(ARRAY, callback);

    expect(result).toBe(expected);
  });

  test.skip('should return false when all values are negative', () => {
    const array = [-1, -2, -3];
    const expected = false;

    function callback(v) {
      return v > 0;
    }

    const result = some.call(array, callback);

    expect(result).toBe(expected);
  });
});

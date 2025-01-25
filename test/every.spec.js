const { every } = require('../src/every');

const ODD_ARRAY = [1, 3, 5, 7];
const EVEN_ARRAY = [2, 4, 6, 8];

describe('every', () => {
  test.skip('should return true when all numbers odd', () => {
    const expected = true;

    function callback(v) {
      return v % 2 !== 0;
    }

    const result = every.call(ODD_ARRAY, callback);

    expect(result).toBe(expected);
  });

  test.skip('should return true when all numbers even', () => {
    const expected = true;

    function callback(v) {
      return v % 2 === 0;
    }

    const result = every.call(EVEN_ARRAY, callback);

    expect(result).toBe(expected);
  });

  test.skip('should return false when at least one odd number in array', () => {
    const expected = false;

    function callback(v) {
      return v % 2 === 0;
    }

    const result = every.call([...EVEN_ARRAY, 9], callback);

    expect(result).toBe(expected);
  });

  test.skip('should return false when at least one even number in array', () => {
    const expected = false;

    function callback(v) {
      return v % 2 === 0;
    }

    const result = every.call([...ODD_ARRAY, 8], callback);

    expect(result).toBe(expected);
  });

  test.skip('should return true when array empty', () => {
    const expected = true;

    function callback(v) {
      return v % 2 === 0;
    }

    const result = every.call([], callback);

    expect(result).toBe(expected);
  });

  test.skip('should return false when all elements do not satisfy callback', () => {
    const expected = false;

    function callback(v) {
      return v > 10;
    }

    const result = every.call(ODD_ARRAY, callback);

    expect(result).toBe(expected);
  });

  test.skip('should return true when all elements satisfy callback for positive numbers', () => {
    const expected = true;

    function callback(v) {
      return v > 0;
    }

    const result = every.call([...ODD_ARRAY, ...EVEN_ARRAY], callback);

    expect(result).toBe(expected);
  });

  test.skip('should return false for mixed positive and negative numbers', () => {
    const expected = false;

    function callback(v) {
      return v > 0;
    }

    const result = every.call([...ODD_ARRAY, -1], callback);

    expect(result).toBe(expected);
  });

  test.skip('should handle strings in the array correctly', () => {
    const expected = true;

    function callback(v) {
      return typeof v === 'string';
    }

    const result = every.call(['a', 'b', 'c'], callback);

    expect(result).toBe(expected);
  });

  test.skip('should return true when all elements are the same', () => {
    const expected = true;

    function callback(v) {
      return v === 1;
    }

    const result = every.call([1, 1, 1, 1], callback);

    expect(result).toBe(expected);
  });
});

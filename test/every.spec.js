const { every } = require('../src/every');

const ODD_ARRAY = [1, 3, 5, 7];
const EVEN_ARRAY = [2, 4, 6, 8];

describe('every', () => {
  test('should return true when all numbers odd', () => {
    const expected = true;

    function callback(v) {
      return v % 2 !== 0;
    }

    const result = every.call(ODD_ARRAY, callback);

    expect(result).toBe(expected);
  });

  test('should return true when all numbers even', () => {
    const expected = true;

    function callback(v) {
      return v % 2 === 0;
    }

    const result = every.call(EVEN_ARRAY, callback);

    expect(result).toBe(expected);
  });

  test('should return false when at least one odd number in array', () => {
    const expected = false;

    function callback(v) {
      return v % 2 === 0;
    }

    const result = every.call([...EVEN_ARRAY, 9], callback);

    expect(result).toBe(expected);
  });

  test('should return false when at least one even number in array', () => {
    const expected = false;

    function callback(v) {
      return v % 2 === 0;
    }

    const result = every.call([...ODD_ARRAY, 8], callback);

    expect(result).toBe(expected);
  });

  test('should return true when array empty', () => {
    const expected = true;

    function callback(v) {
      return v % 2 === 0;
    }

    const result = every.call([], callback);

    expect(result).toBe(expected);
  });
});

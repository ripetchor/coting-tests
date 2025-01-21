const { some } = require('../src/some');

const ARRAY = [1, 3, 4, 6];

describe('some', () => {
  test('should return true when at least one even number in array', () => {
    const expected = true;

    function callback(v) {
      return v === 4;
    }

    const result = some.call(ARRAY, callback);

    expect(result).toBe(expected);
  });

  test('should return true when at least one odd number in array', () => {
    const expected = true;

    function callback(v) {
      return v === 3;
    }

    const result = some.call(ARRAY, callback);

    expect(result).toBe(expected);
  });

  test('should return false when value not in array', () => {
    const expected = false;

    function callback(v) {
      return v === 999;
    }

    const result = some.call(ARRAY, callback);

    expect(result).toBe(expected);
  });

  test('should return false when array empty', () => {
    const expected = false;

    function callback(v) {
      return v === 3;
    }

    const result = some.call([], callback);

    expect(result).toBe(expected);
  });
});

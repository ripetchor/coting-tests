import { describe, expect, test } from 'vitest';

import { find } from '../src/find';

const ARRAY = [1, 3, 4, 6];

describe('find', () => {
  test.skip('should find first even value', () => {
    const expected = 4;

    function callback(v) {
      return v % 2 === 0;
    }

    const result = find.call(ARRAY, callback);

    expect(result).toBe(expected);
  });

  test.skip('should find first odd value', () => {
    const expected = 1;

    function callback(v) {
      return v % 2 !== 0;
    }

    const result = find.call(ARRAY, callback);

    expect(result).toBe(expected);
  });

  test.skip('should find first value at even index', () => {
    const expected = 1;

    function callback(_, i) {
      return i % 2 === 0;
    }

    const result = find.call(ARRAY, callback);

    expect(result).toBe(expected);
  });

  test.skip('should find first value at odd index', () => {
    const expected = 3;

    function callback(_, i) {
      return i % 2 !== 0;
    }

    const result = find.call(ARRAY, callback);

    expect(result).toBe(expected);
  });

  test.skip('should return undefined when value not found', () => {
    const expected = undefined;

    function callback(v) {
      return v === 999;
    }

    const result = find.call(ARRAY, callback);

    expect(result).toBe(expected);
  });

  test.skip('should return undefined when array empty', () => {
    const expected = undefined;

    function callback(v) {
      return v === 999;
    }

    const result = find.call([], callback);

    expect(result).toBe(expected);
  });

  test.skip('should find first value greater than 5', () => {
    const expected = 6;

    function callback(v) {
      return v > 5;
    }

    const result = find.call(ARRAY, callback);

    expect(result).toBe(expected);
  });

  test.skip('should return undefined for all negative callback results', () => {
    const expected = undefined;

    function callback(v) {
      return v < 0;
    }

    const result = find.call(ARRAY, callback);

    expect(result).toBe(expected);
  });

  test.skip('should find the first value divisible by 3', () => {
    const expected = 3;

    function callback(v) {
      return v % 3 === 0;
    }

    const result = find.call(ARRAY, callback);

    expect(result).toBe(expected);
  });

  test.skip('should find the first string in a mixed array', () => {
    const mixedArray = [1, 'hello', true, 4];
    const expected = 'hello';

    function callback(v) {
      return typeof v === 'string';
    }

    const result = find.call(mixedArray, callback);

    expect(result).toBe(expected);
  });

  test.skip('should use thisArg correctly', () => {
    const array = [10, 20, 30];
    const context = { threshold: 15 };

    function callback(v) {
      return v > this.threshold;
    }

    const result = find.call(array, callback, context);

    expect(result).toBe(20);
  });
});

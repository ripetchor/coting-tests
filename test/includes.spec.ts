import { describe, expect, test } from 'vitest';

import { includes } from '../src/includes';

describe('includes method tests', () => {
  const ARRAY = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];

  test.skip('should return true if the element is present in the array', () => {
    const result = includes.call(ARRAY, 'c');

    expect(result).toBe(true);
  });

  test.skip('should return false if the element is not present in the array', () => {
    const result = includes.call(ARRAY, 'z');

    expect(result).toBe(false);
  });

  test.skip('should return true if the element is present in the array starting from a specific index', () => {
    const result = includes.call(ARRAY, 'c', 2);

    expect(result).toBe(true);
  });

  test.skip('should return false if the element is not present in the array starting from a specific index', () => {
    const result = includes.call(ARRAY, 'a', 3);

    expect(result).toBe(false);
  });

  test.skip('should handle negative fromIndex correctly', () => {
    const result = includes.call(ARRAY, 'h', -3);

    expect(result).toBe(true);
  });

  test.skip('should return false if fromIndex is greater than or equal to the array length', () => {
    const result = includes.call(ARRAY, 'a', 111);

    expect(result).toBe(false);
  });

  test.skip('should return true if the element is NaN and NaN is present in the array', () => {
    const arrayWithNaN = [1, 2, NaN, 4];

    const result = includes.call(arrayWithNaN, NaN);

    expect(result).toBe(true);
  });

  test.skip('should return false if the element is NaN and NaN is not present in the array', () => {
    const arrayWithoutNaN = [1, 2, 3, 4];

    const result = includes.call(arrayWithoutNaN, NaN);

    expect(result).toBe(false);
  });

  test.skip('should return false if the array is empty', () => {
    const result = includes.call([], 'a');

    expect(result).toBe(false);
  });

  test.skip('should throw TypeError when called on a null object', () => {
    expect(() => includes.call(null)).toThrow(TypeError);
  });
});

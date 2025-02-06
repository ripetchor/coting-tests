import { describe, expect, test } from 'vitest';

import { slice } from '../src/slice';

describe('slice', () => {
  const ARRAY = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j'];

  test.skip('should return a copy of the original array when no arguments are provided', () => {
    const result = slice.call(ARRAY);

    expect(result).toEqual(ARRAY);
    expect(result).not.toBe(ARRAY);
  });

  test.skip('should return a subarray starting from positive start index', () => {
    const result = slice.call(ARRAY, 2);

    expect(result).toEqual(['c', 'd', 'e', 'f', 'g', 'h', 'i', 'j']);
  });

  test.skip('should return a subarray starting from negative start index', () => {
    const result = slice.call(ARRAY, -2);

    expect(result).toEqual(['i', 'j']);
  });

  test.skip('should return a subarray when the start and end index are positive', () => {
    const result = slice.call(ARRAY, 2, 5);

    expect(result).toEqual(['c', 'd', 'e']);
  });

  test.skip('should return a subarray when the start index is positive and the end index is negative', () => {
    const result = slice.call(ARRAY, 3, -5);

    expect(result).toEqual(['d', 'e']);
  });

  test.skip('should return an empty array when start and end are both negative and start >= end', () => {
    const result = slice.call(ARRAY, -3, -7);

    expect(result).toEqual([]);
  });

  test.skip('should return an empty array if start index is greater than or equal to end index', () => {
    const result = slice.call(ARRAY, 5, 2);

    expect(result).toEqual([]);
  });

  test.skip('should return an empty array when start index is greater than array length', () => {
    const result = slice.call(ARRAY, 111);

    expect(result).toEqual([]);
  });

  test.skip('should throw TypeError when called on a null object', () => {
    expect(() => slice.call(null)).toThrow(TypeError);
  });
});

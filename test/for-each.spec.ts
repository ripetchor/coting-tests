import { describe, expect, test, vi } from 'vitest';

import { forEach } from '../src/for-each';

const ARRAY = [1, 2, 3];

describe('forEach', () => {
  test.skip('should calculate sum', () => {
    let result = 0;
    const expected = 6;

    function callback(v: number) {
      result += v;
    }

    forEach.call(ARRAY, callback);

    expect(result).toBe(expected);
  });

  test.skip('should log every value', () => {
    const logSpy = vi.fn();

    function callback(v: number) {
      logSpy(v);
    }

    forEach.call(ARRAY, callback);

    expect(logSpy).toHaveBeenCalledWith(ARRAY[0]);
    expect(logSpy).toHaveBeenCalledWith(ARRAY[1]);
    expect(logSpy).toHaveBeenCalledWith(ARRAY[2]);

    expect(logSpy).toHaveBeenCalledTimes(ARRAY.length);

    logSpy.mockRestore();
  });

  test.skip('should log every index', () => {
    const logSpy = vi.fn();

    function callback(_: number, i: number) {
      logSpy(i);
    }

    forEach.call(ARRAY, callback);

    expect(logSpy).toHaveBeenCalledWith(0);
    expect(logSpy).toHaveBeenCalledWith(1);
    expect(logSpy).toHaveBeenCalledWith(2);

    expect(logSpy).toHaveBeenCalledTimes(ARRAY.length);

    logSpy.mockRestore();
  });

  test.skip('should log array itself', () => {
    const logSpy = vi.fn();

    function callback(_: number, __: number, arr: number[]) {
      logSpy(arr);
    }

    forEach.call(ARRAY, callback);

    expect(logSpy).toHaveBeenCalledTimes(ARRAY.length);
    expect(logSpy).toHaveBeenCalledWith(ARRAY);

    logSpy.mockRestore();
  });

  test.skip('should not be called when array empty', () => {
    const mockCallback = vi.fn();

    forEach.call([], mockCallback);

    expect(mockCallback).not.toHaveBeenCalled();

    mockCallback.mockRestore();
  });

  test.skip('should apply callback to every element', () => {
    const results: number[] = [];
    const expected = [2, 4, 6];

    function callback(v: number) {
      results.push(v * 2);
    }

    forEach.call(ARRAY, callback);

    expect(results).toEqual(expected);
  });

  test.skip('should handle mixed data types in array', () => {
    const mixedArray = [1, 'text', true];
    const results: string[] = [];

    function callback(v: unknown) {
      results.push(typeof v);
    }

    forEach.call(mixedArray, callback);

    expect(results).toEqual(['number', 'string', 'boolean']);
  });

  test.skip('should count the number of iterations', () => {
    let count = 0;

    function callback() {
      count++;
    }

    forEach.call(ARRAY, callback);

    expect(count).toBe(ARRAY.length);
  });

  test.skip('should handle nested arrays correctly', () => {
    const nestedArray = [
      [1, 2],
      [3, 4],
      [5, 6],
    ];
    const results: number[] = [];

    function callback(v: number[]) {
      results.push(...v);
    }

    forEach.call(nestedArray, callback);

    expect(results).toEqual([1, 2, 3, 4, 5, 6]);
  });

  test.skip('should verify callback receives all arguments', () => {
    const mockCallback = vi.fn();

    forEach.call(ARRAY, mockCallback);

    ARRAY.forEach((v, i, arr) => {
      expect(mockCallback).toHaveBeenCalledWith(v, i, arr);
    });

    mockCallback.mockRestore();
  });
});

const { forEach } = require('../src/for-each');

const ARRAY = [1, 2, 3];

afterEach(() => {
  jest.resetAllMocks();
});

describe('forEach', () => {
  test.skip('should calculate sum', () => {
    let result = 0;
    const expected = 6;

    function callback(v) {
      result += v;
    }

    forEach.call(ARRAY, callback);

    expect(result).toBe(expected);
  });

  test.skip('should log every value', () => {
    const logSpy = jest.spyOn(console, 'log');

    function callback(v) {
      console.log(v);
    }

    forEach.call(ARRAY, callback);

    expect(logSpy).toHaveBeenCalledWith(ARRAY[0]);
    expect(logSpy).toHaveBeenCalledWith(ARRAY[1]);
    expect(logSpy).toHaveBeenCalledWith(ARRAY[2]);

    expect(logSpy).toHaveBeenCalledTimes(ARRAY.length);
  });

  test.skip('should log every index', () => {
    const logSpy = jest.spyOn(console, 'log');

    function callback(_, i) {
      console.log(i);
    }

    forEach.call(ARRAY, callback);

    expect(logSpy).toHaveBeenCalledWith(0);
    expect(logSpy).toHaveBeenCalledWith(1);
    expect(logSpy).toHaveBeenCalledWith(2);

    expect(logSpy).toHaveBeenCalledTimes(ARRAY.length);
  });

  test.skip('should log array itself', () => {
    const logSpy = jest.spyOn(console, 'log');

    function callback(_, __, arr) {
      console.log(arr);
    }

    forEach.call(ARRAY, callback);

    expect(logSpy).toHaveBeenCalledTimes(ARRAY.length);
    expect(logSpy).toHaveBeenCalledWith(ARRAY);
  });

  test.skip('should not be called when array empty', () => {
    const mockCallback = jest.fn();

    forEach.call([], mockCallback);

    expect(mockCallback).not.toHaveBeenCalled();

    mockCallback.mockClear();
  });

  test.skip('should apply callback to every element', () => {
    const results = [];
    const expected = [2, 4, 6];

    function callback(v) {
      results.push(v * 2);
    }

    forEach.call(ARRAY, callback);

    expect(results).toEqual(expected);
  });

  test.skip('should handle mixed data types in array', () => {
    const mixedArray = [1, 'text', true];
    const results = [];

    function callback(v) {
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
    const results = [];

    function callback(v) {
      results.push(...v);
    }

    forEach.call(nestedArray, callback);

    expect(results).toEqual([1, 2, 3, 4, 5, 6]);
  });

  test.skip('should verify callback receives all arguments', () => {
    const mockCallback = jest.fn();

    forEach.call(ARRAY, mockCallback);

    ARRAY.forEach((v, i, arr) => {
      expect(mockCallback).toHaveBeenCalledWith(v, i, arr);
    });
  });
});

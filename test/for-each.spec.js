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
});

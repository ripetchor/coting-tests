import { describe, expect, test } from 'vitest';

import { reduce } from '../src/reduce';

describe('reduce', () => {
  test.skip('should sum all numbers without initial value', () => {
    const expected = 6;

    function callback(acc, curr) {
      return acc + curr;
    }

    const result = reduce.call([1, 2, 3], callback);

    expect(result).toEqual(expected);
  });

  test.skip('should sum all numbers with initial value', () => {
    const expected = 16;

    function callback(acc, curr) {
      return acc + curr;
    }

    const result = reduce.call([1, 2, 3], callback, 10);

    expect(result).toEqual(expected);
  });

  test.skip('should concatenate strings', () => {
    const expected = 'abc';

    function callback(acc, curr) {
      return acc + curr;
    }

    const result = reduce.call(['a', 'b', 'c'], callback);

    expect(result).toStrictEqual(expected);
  });

  test.skip('should merge properties and sum their values', () => {
    const expected = { a: 3, b: 3, c: 6 };

    function callback(acc, curr) {
      Object.keys(curr).forEach((key) => {
        acc[key] = (acc[key] || 0) + curr[key];
      });
      return acc;
    }

    const result = reduce.call([{ a: 1, b: 1 }, { a: 2, b: 2 }, { c: 6 }], callback);

    expect(result).toStrictEqual(expected);
  });

  test.skip('should group objects by key', () => {
    const people = [
      { name: 'Alice', age: 25 },
      { name: 'Bob', age: 30 },
      { name: 'Charlie', age: 25 },
    ];

    const expected = {
      25: [
        { name: 'Alice', age: 25 },
        { name: 'Charlie', age: 25 },
      ],
      30: [{ name: 'Bob', age: 30 }],
    };

    function callback(acc, person) {
      if (!acc[person.age]) acc[person.age] = [];
      acc[person.age].push(person);
      return acc;
    }

    const result = reduce.call(people, callback, {});

    expect(result).toEqual(expected);
  });

  test.skip('should throw error when array empty and no initial value passed', () => {
    expect(() => {
      reduce.call([], () => {});
    }).toThrow();
  });

  test.skip('should return initial value when array empty and initial value passed', () => {
    const expected = 0;

    const result = reduce.call([], () => {}, 0);

    expect(result).toBe(expected);
  });

  test.skip('should flatten nested arrays', () => {
    const array = [
      [1, 2],
      [3, 4],
      [5, 6],
    ];
    const expected = [1, 2, 3, 4, 5, 6];

    function callback(acc, curr) {
      return acc.concat(curr);
    }

    const result = reduce.call(array, callback, []);

    expect(result).toEqual(expected);
  });

  test.skip('should count occurrences of items in an array', () => {
    const array = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];
    const expected = { apple: 3, banana: 2, orange: 1 };

    function callback(acc, curr) {
      acc[curr] = (acc[curr] || 0) + 1;
      return acc;
    }

    const result = reduce.call(array, callback, {});

    expect(result).toEqual(expected);
  });

  test.skip('should calculate the maximum value in an array', () => {
    const array = [1, 7, 3, 9, 5];
    const expected = 9;

    function callback(acc, curr) {
      return Math.max(acc, curr);
    }

    const result = reduce.call(array, callback, -Infinity);

    expect(result).toBe(expected);
  });
});

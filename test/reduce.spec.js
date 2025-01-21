const { reduce } = require('../src/reduce');

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
});

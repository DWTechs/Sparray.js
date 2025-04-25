const { add } = require("../dist/sparray.cjs.js");

describe('add', () => {
  test('should insert an element at the specified index', () => {
    const array = [1, 2, 3];
    const result = add(array, 4, 1);
    expect(result).toEqual([1, 4, 2, 3]);
  });

  test('should handle inserting at the beginning of the array', () => {
    const array = [2, 3, 4];
    const result = add(array, 1, 0);
    expect(result).toEqual([1, 2, 3, 4]);
  });

  test('should handle inserting at the end of the array', () => {
    const array = [1, 2, 3];
    const result = add(array, 4, 3);
    expect(result).toEqual([1, 2, 3, 4]);
  });

  test('should handle inserting into an empty array', () => {
    const array = [];
    const result = add(array, 1, 0);
    expect(result).toEqual([1]);
  });

  test('should modify the array if index is out of upper bounds', () => {
    const array = [1, 2, 3];
    const result = add(array, 4, 10);
    expect(result).toEqual([1, 2, 3, 4]);
  });

  test('should handle inserting at a negative index', () => {
    const array = [1, 2, 3];
    const result = add(array, 4, -1);
    expect(result).toEqual([1, 2, 4, 3]);
  });

  test('should handle inserting at a negative index that is out of bounds', () => {
    const array = [1, 2, 3];
    const result = add(array, 4, -10);
    expect(result).toEqual([4, 1, 2, 3]);
  });

  test('should handle inserting at a negative index that is within bounds', () => {
    const array = [1, 2, 3];
    const result = add(array, 4, -2);
    expect(result).toEqual([1, 4, 2, 3]);
  });
});
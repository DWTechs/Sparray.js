import  { chunk } from "../dist/sparray";

test("Should chunk an array of objects into smaller arrays of specified size using realistic data for our usecase", () => {
  const arrayToChunk = [
    {
      name: "Toto",
      age: 21,
    },
    {
      name: "Titi",
      age: 23,
    },
    {
      name: "Tata",
      age: 32,
    },
    {
      name: "Tutu",
      age: 32,
    },
  ];
  const expected = [
    [
      {
        name: "Toto",
        age: 21,
      },
      {
        name: "Titi",
        age: 23,
      },
    ],
    [
      {
        name: "Tata",
        age: 32,
      },
      {
        name: "Tutu",
        age: 32,
      },
    ],
  ];
  expect(chunk(arrayToChunk, 2)).toMatchObject(expected);
});

test("should chunk an array into smaller arrays of specified size", () => {
  const rows = [1, 2, 3, 4, 5];
  const size = 2;
  const expected = [[1, 2], [3, 4], [5]];
  expect(chunk(rows, size)).toEqual(expected);
});

test("should handle an array smaller than the chunk size", () => {
  const rows = [1, 2, 3];
  const size = 5;
  const expected = [[1, 2, 3]];
  expect(chunk(rows, size)).toEqual(expected);
});

test("should work with an empty array", () => {
  const rows = [];
  const size = 3;
  const expected = [[]];
  expect(chunk(rows, size)).toEqual(expected);
});

test("should chunk an array into individual elements when chunk size is 1", () => {
  const rows = [1, 2, 3];
  const size = 1;
  const expected = [[1], [2], [3]];
  expect(chunk(rows, size)).toEqual(expected);
});

test("should handle an array that is exactly the size of the chunk size", () => {
  const rows = [1, 2, 3, 4];
  const size = 4;
  const expected = [[1, 2, 3, 4]];
  expect(chunk(rows, size)).toEqual(expected);
});

test("should return the original array in a single chunk for a very large chunk size", () => {
  const rows = [1, 2, 3];
  const size = 1000;
  const expected = [[1, 2, 3]];
  expect(chunk(rows, size)).toEqual(expected);
});

test("should correctly chunk an array containing non-numeric values", () => {
  const rows = ["a", "b", "c", "d", "e"];
  const size = 2;
  const expected = [["a", "b"], ["c", "d"], ["e"]];
  expect(chunk(rows, size)).toEqual(expected);
});

test("should correctly chunk an array containing mixed types of values", () => {
  const rows = [1, "b", true, { val: 4 }, ["e"]];
  const size = 2;
  const expected = [[1, "b"], [true, { val: 4 }], [["e"]]];
  expect(chunk(rows, size)).toEqual(expected);
});

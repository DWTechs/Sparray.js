const { getCommonValues } = require("../dist/sparray.cjs");

test('should return an empty array if no common values are found', () => {
  const arr1 = [1, 2, 3];
  const arr2 = [4, 5, 6];
  expect(getCommonValues(arr1, arr2)).toEqual([]);
});

test('should return the common values between two arrays', () => {
  const arr1 = [1, 2, 3, 4];
  const arr2 = [3, 4, 5, 6];
  expect(getCommonValues(arr1, arr2)).toEqual([3, 4]);
});

test('should not ignore duplicates in the input arrays', () => {
  const arr1 = [2, 2, 3, 4];
  const arr2 = [1, 2, 2, 3];
  expect(getCommonValues(arr1, arr2)).toEqual([2, 2, 3]);
});

test('should return an empty array if one of the input arrays is empty', () => {
  const arr1 = [1, 2, 3];
  const arr2 = [];
  expect(getCommonValues(arr1, arr2)).toEqual([]);
});

test('should return an empty array if one of the input arrays is not an array', () => {
  const arr1 = [1, 2, 3];
  const arr2 = 'not an array';
  expect(() => getCommonValues(arr1, arr2)).toEqual([]);
});

test('should return an empty array if one of the input arrays is not an array', () => {
  const arr1 = [1, 2, 3];
  const arr2 = {};
  expect(() => getCommonValues(arr1, arr2)).toEqual([]);
});

test('should return an empty array if one of the input arrays is not an array', () => {
  const arr1 = [1, 2, 3];
  const arr2 = 4;
  expect(() => getCommonValues(arr1, arr2)).toEqual([]);
});

test('should return an empty array if one of the input arrays is empty', () => {
  const arr2 = [1, 2, 3];
  const arr1 = [];
  expect(getCommonValues(arr1, arr2)).toEqual([]);
});

test('should return an empty array if one of the input arrays is not an array', () => {
  const arr2 = [1, 2, 3];
  const arr1 = 'not an array';
  expect(() => getCommonValues(arr1, arr2)).toEqual([]);
});

test('should return an empty array if one of the input arrays is not an array', () => {
  const arr2 = [1, 2, 3];
  const arr1 = {};
  expect(() => getCommonValues(arr1, arr2)).toEqual([]);
});

test('should return an empty array if one of the input arrays is not an array', () => {
  const arr2 = [1, 2, 3];
  const arr1 = 4;
  expect(() => getCommonValues(arr1, arr2)).toEqual([]);
});
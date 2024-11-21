const { checkCommonValues } = require("../dist/sparray.cjs");

test('should return an empty array if no common values are found', () => {
  const arr1 = [1, 2, 3];
  const arr2 = [4, 5, 6];
  expect(checkCommonValues(arr1, arr2)).toEqual(false);
});

test('should return true when there are common values between two arrays', () => {
  const arr1 = [1, 2, 3, 4];
  const arr2 = [3, 4, 5, 6];
  expect(checkCommonValues(arr1, arr2)).toEqual(true);
});

test('should return true when there are duplicates in the common values', () => {
  const arr1 = [2, 2, 3, 4];
  const arr2 = [1, 2, 2, 3];
  expect(checkCommonValues(arr1, arr2)).toEqual(true);
});

test('should return an empty array if one of the input arrays is empty', () => {
  const arr1 = [1, 2, 3];
  const arr2 = [];
  expect(checkCommonValues(arr1, arr2)).toEqual(false);
});

test('should return an empty array if one of the input arrays is not an array', () => {
  const arr1 = [1, 2, 3];
  const arr2 = 'not an array';
  expect(checkCommonValues(arr1, arr2)).toEqual(false);
});

test('should return an empty array if one of the input arrays is not an array', () => {
  const arr1 = [1, 2, 3];
  const arr2 = {};
  expect(checkCommonValues(arr1, arr2)).toEqual(false);
});

test('should return an empty array if one of the input arrays is not an array', () => {
  const arr1 = [1, 2, 3];
  const arr2 = 4;
  expect(checkCommonValues(arr1, arr2)).toEqual(false);
});

test('should return an empty array if one of the input arrays is empty', () => {
  const arr2 = [1, 2, 3];
  const arr1 = [];
  expect(checkCommonValues(arr1, arr2)).toEqual(false);
});

test('should return an empty array if one of the input arrays is not an array', () => {
  const arr2 = [1, 2, 3];
  const arr1 = 'not an array';
  expect(checkCommonValues(arr1, arr2)).toEqual(false);
});

test('should return an empty array if one of the input arrays is not an array', () => {
  const arr2 = [1, 2, 3];
  const arr1 = {};
  expect(checkCommonValues(arr1, arr2)).toEqual(false);
});

test('should return an empty array if one of the input arrays is not an array', () => {
  const arr2 = [1, 2, 3];
  const arr1 = 4;
  expect(checkCommonValues(arr1, arr2)).toEqual(false);
});
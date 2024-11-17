const { setChunkSize, getChunkSize } = require("../dist/sparray.cjs");

test('should return the default chunk size', () => {
  expect(getChunkSize()).toBe(100);
});

test('should return the current chunk size after setting it', () => {
  setChunkSize(50);
  expect(getChunkSize()).toBe(50);
});

test('should return the default chunk size if the current chunk size is not a positive integer', () => {
  setChunkSize(-1);
  expect(getChunkSize()).toBe(50);
});

test('should return the default chunk size if the current chunk size is 0', () => {
  setChunkSize(0);
  expect(getChunkSize()).toBe(50);
});

test('should return the default chunk size if the current chunk size is not an integer', () => {
  setChunkSize(10.5);
  expect(getChunkSize()).toBe(50);
});

test('should return the default chunk size if the current chunk size is not a number', () => {
  setChunkSize('abc');
  expect(getChunkSize()).toBe(50);
});
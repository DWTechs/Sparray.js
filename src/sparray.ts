import { isValidInteger, isArray } from "@dwtechs/checkard";

let chunkSize = 100;

/**
 * Gets the chunk size for the `chunk` function.
 *
 * @return {number} The current chunk size.
 */
function getChunkSize(): number {
  return chunkSize;
}

/**
 * Sets the chunk size for the `chunk` function.
 *
 * @param {number} size - The number of elements to include in each chunk.
 * @return {number} The new chunk size.
 */
function setChunkSize(size: number): number {
  chunkSize = isValidInteger(size, 1, 99999, true) ? size : chunkSize;
  return chunkSize;
}


/**
 * Inserts an element into an array at a specified index.
 *
 * @param {unknown[]} a - The array to modify.
 * @param {unknown} prop - The element to insert into the array.
 * @param {number} start - The index at which to insert the element.
 * @returns {unknown[]} The modified array after the insertion.
 */
function add(a: unknown[], prop: unknown, start: number): unknown[] {
  a.splice(start, 0, prop);
  return a;
}

/**
 * Creates chunks of data from a given array of rows.
 *
 * @param {Array} rows - The array to be chunked.
 * @param {number} count - The number of rows in the array.
 * @return {Array} An array of chunked arrays.
 */
function chunk(rows: any[], size = chunkSize): any[] {
  const s = isValidInteger(size, 1, 99999, true) ? size : chunkSize;
  const count = rows.length;
  if (count <= s) return [rows];

  const chunks = [];
  for (let i = 0; i < count; i += size) {
    chunks.push(rows.slice(i, i + size));
  }
  return chunks;
}

/**
 * Returns an array of elements that are common to both input arrays.
 *
 * @param {Array} a - The first array to compare.
 * @param {Array} b - The second array to compare.
 * @return {Array} An array of elements that exist in both input arrays.
 */
function getCommonValues(a: any[], b: any[]): any[] {
  return isArray(a, '>', 0) && isArray(b, '>', 0) ? a.filter((e) => b.includes(e)) : [];
}

/**
 * Checks if there are common values between two arrays.
 *
 * @param {Array} a - The first array to compare.
 * @param {Array} b - The second array to compare.
 * @return {boolean} True if there are common values, otherwise false.
 */
function checkCommonValues(a: any[], b: any[]): boolean {
  return isArray(a, '>', 0) && isArray(b, '>', 0) ? a.some((e) => b.includes(e))  : false;
}

/**
 * Deletes specified properties from each object in an array.
 *
 * @param {Array} arr - The array of objects.
 * @param {Array} props - The properties to delete.
 * @return {Array} The modified array.
 */
function deleteProps(arr: Record<string, any>[], props: string[]): Record<string, any>[] {
  if (isArray(arr, '>', 0) || isArray(props, '>', 0)) 
    for (const l of arr) {
      for (const p of props) {
        delete l[p];
      }
    }

  return arr;
}

/**
 * Flatten chunks.
 *
 * @param {Array} chunks - The array of chunks to be flattened.
 * @return {Array} The flattened array.
 */
function flatten(chunks: any[][]): any[] {
  return isArray(chunks, '>', 0) ? chunks.flat(2) : chunks;
}

export {
  getChunkSize,
  setChunkSize,
  add,
  chunk,
  deleteProps,
  checkCommonValues,
  getCommonValues,
  flatten,
};

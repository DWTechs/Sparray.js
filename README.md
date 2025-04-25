
[![License: MIT](https://img.shields.io/npm/l/@dwtechs/sparray.svg?color=brightgreen)](https://opensource.org/licenses/MIT)
[![npm version](https://badge.fury.io/js/%40dwtechs%2Fsparray.svg)](https://www.npmjs.com/package/@dwtechs/sparray)
[![last version release date](https://img.shields.io/github/release-date/DWTechs/Sparray.js)](https://www.npmjs.com/package/@dwtechs/sparray)
![Jest:coverage](https://img.shields.io/badge/Jest:coverage-100%25-brightgreen.svg)
[![minified size](https://img.shields.io/bundlephobia/min/@dwtechs/sparray?color=brightgreen)](https://www.npmjs.com/package/@dwtechs/sparray)

- [Synopsis](#synopsis)
- [Support](#support)
- [Installation](#installation)
- [Usage](#usage)
  - [ES6](#es6)
  - [CommonJS](#commonjs)
- [API Reference](#api-reference)
- [Contributors](#contributors)
- [Stack](#stack)


## Synopsis

**[Sparray.js](https://github.com/DWTechs/Sparray.js)** is an Open source arrays toolkit library for Javascript.

- Only 1 small dependency to check inputs variables
- Very lightweight
- Thoroughly tested
- Works in Javascript, Typescript and Node.js
- Can be used as CommonJS or EcmaScrypt module
- Written in Typescript


## Support

- node: 14

This is the oldest targeted versions. The library should work properly on older versions of Node.js but we do not support it officially.  


## Installation

```bash
$ npm i @dwtechs/sparray
```


## Usage


### ES6 / TypeScript

```javascript
import { chunk } from "@dwtechs/sparray";

function chunkArray(req, res, next) {
  req.chunks = chunk(req.body.rows, null);
  next();
}

export {
  chunkArray,
};

```


### CommonJS

```javascript

const sp = require("@dwtechs/sparray");

function chunk(req, res, next) {
  req.chunks = sp.chunk(req.body.rows, null);
  next();
}

module.exports = {
  chunk,
};

```


## API Reference


```javascript

let chunkSize = 100 //Default value

/**
 * Gets the chunk size for the `chunk` function.
 *
 * @return {number} The current chunk size.
 */
getChunkSize(): number {}

/**
 * Sets the chunk size for the `chunk` function.
 *
 * @param {number} size - The number of elements to include in each chunk.
 * @return {number} The new chunk size.
 */
setChunkSize(size: number): number {}

/**
 * Inserts an element into an array at a specified index.
 *
 * @param {unknown[]} a - The array to modify.
 * @param {unknown} prop - The element to insert into the array.
 * @param {number} start - The index at which to insert the element.
 * @returns {unknown[]} The modified array after the insertion.
 */
add(a: unknown[], prop: unknown, start: number): unknown[];

/**
 * Creates chunks of data from a given array of rows.
 *
 * @param {Array} rows - The array to be chunked.
 * @param {number} count - The number of rows in the array.
 * @return {Array} An array of chunked arrays.
 */
chunk(rows: any[], size?: number = chunkSize): any[] {}

/**
 * Returns an array of elements that are common to both input arrays.
 *
 * @param {Array} a - The first array to compare.
 * @param {Array} b - The second array to compare.
 * @return {Array} An array of elements that exist in both input arrays.
 */
getCommonValues(a: any[], b: any[]): any[] {}

/**
 * Checks if there are common values between two arrays.
 *
 * @param {Array} a - The first array to compare.
 * @param {Array} b - The second array to compare.
 * @return {boolean} True if there are common values, otherwise false.
 */
checkCommonValues(a: any[], b: any[]): boolean {}

/**
 * Flatten chunks.
 *
 * @param {Array} chunks - The array of chunks to be flattened.
 * @return {Array} The flattened array.
 */
flatten(chunks: any[]): any[] {}

/**
 * Deletes specified properties from each object in an array.
 *
 * @param {Array} arr - The array of objects.
 * @param {Array} props - The properties to delete.
 * @return {Array} The modified array.
 */
deleteProps(arr: Record<string, any>[], props: string[]): Record<string, any>[] {}

```

## Contributors

Sparray.js is still in development and we would be glad to get all the help you can provide.
To contribute please read **[contributor.md](https://github.com/DWTechs/Sparray.js/blob/main/contributor.md)** for detailed installation guide.


## Stack

| Purpose         |                    Choice                    |                                                     Motivation |
| :-------------- | :------------------------------------------: | -------------------------------------------------------------: |
| repository      |        [Github](https://github.com/)         |     hosting for software development version control using Git |
| package manager |     [npm](https://www.npmjs.com/get-npm)     |                                default node.js package manager |
| language        | [TypeScript](https://www.typescriptlang.org) | static type checking along with the latest ECMAScript features |
| module bundler  |      [Rollup](https://rollupjs.org)          |                        advanced module bundler for ES6 modules |
| unit testing    |          [Jest](https://jestjs.io/)          |                  delightful testing with a focus on simplicity |

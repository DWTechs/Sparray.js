
[![License: MIT](https://img.shields.io/npm/l/@dwtechs/sparray.svg?color=brightgreen)](https://opensource.org/licenses/MIT)
[![npm version](https://badge.fury.io/js/%40dwtechs%2Fsparray.svg)](https://www.npmjs.com/package/@dwtechs/sparray)
[![last version release date](https://img.shields.io/github/release-date/DWTechs/Sparray.js)](https://www.npmjs.com/package/@dwtechs/sparray)
![Jest:coverage](https://img.shields.io/badge/Jest:coverage-100%25-brightgreen.svg)
[![minified size](https://img.shields.io/bundlephobia/min/@dwtechs/sparray?color=brightgreen)](https://www.npmjs.com/package/@dwtechs/sparray)

- [Synopsis](#synopsis)
- [Browsers](#browsers)
- [Installation](#installation)
- [Usage](#usage)
  - [ES6](#es6)
  - [CommonJS](#commonjs)
  - [IIFE](#iife)
- [API Reference](#api-reference)
- [Contributors](#contributors)
- [License](#license)
- [Stack](#stack)


## Synopsis
Useful methods to work with arrays in Javascript

**[Sparray.js](https://github.com/DWTechs/Sparray.js)** is an open source xx library for Node.js to  (...)

- Only 1 dependency to check inputs variables
- Very lightweight
- Thoroughly tested
- Works in Node.js
- Can be used as CommonJS or EcmaScrypt module
- Written in Typescript


## Support

- node: x.x

This is the oldest targeted versions. The library should work properly on older versions of Node.js but we do not support it officially.  


## Installation

```bash
$ npm i @dwtechs/sparray
```


## Usage


### CommonJS

Example of use with Express.js in Javascript using CommonJS format 

```javascript
const sp = require("@dwtechs/sparray/dist/sparray.cjs");

/**
 * Break a large array of rows from the body of the request into smaller chunks.
 *
 * @function chunk
 * @param {Object} req - The express request object.
 * @param {Object} res - The express response object.
 * @param {function} next - The next middleware in the stack.
 */
function chunk(req, res, next) {
  req.chunks = sp.chunk(req.body.rows, null);
  next();
}

module.exports = {
  chunk,
};

```


### ES6 / TypeScript

Import of the Sparray.js module into a Typescript file

```javascript

import { chunk, deleteProps } from "@dwtechs/sparray";

/**
 * Break a large array of rows from the body of the request into smaller chunks.
 *
 * @function chunk
 * @param {Object} req - The express request object.
 * @param {Object} res - The express response object.
 * @param {function} next - The next middleware in the stack.
 */
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

getChunkSize(): number {}

setChunkSize(size: number): number {}

chunk(rows: any[], size?: number = chunkSize): any[] {} //size?: number

getCommonValues(a: any[], b: any[]): any[] {}

flatten(chunks: any[]): any[] {}

deleteProps(arr: any[], props: string[]): any[] {}

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
| module bundler  |      [Rollup.js](https://rollupjs.org)       |                        advanced module bundler for ES6 modules |
| unit testing    |          [Jest](https://jestjs.io/)          |                  delightful testing with a focus on simplicity |

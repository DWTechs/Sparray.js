/*
MIT License

Copyright (c) 2022 DWTechs

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

https://github.com/DWTechs/Sparray.js
*/

declare function getChunkSize(): number;
declare function setChunkSize(size: number): number;
declare function add(a: unknown[], prop: unknown, start: number): unknown[] 
declare function chunk(rows: any[], size?: number): any[];
declare function checkCommonValues(a: any[], b: any[]): boolean;
declare function getCommonValues(a: any[], b: any[]): any[];
declare function deleteProps(arr: Record<string, any>[], props: string[]): Record<string, any>[];
declare function flatten(chunks: any[]): any[];

export { 
  getChunkSize,
  setChunkSize,
  add,
  chunk,
  deleteProps,
  checkCommonValues,
  getCommonValues,
  flatten
};

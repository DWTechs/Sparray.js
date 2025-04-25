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

import { isValidInteger, isArray } from '@dwtechs/checkard';

let chunkSize = 100;
function getChunkSize() {
    return chunkSize;
}
function setChunkSize(size) {
    chunkSize = isValidInteger(size, 1, 99999, true) ? size : chunkSize;
    return chunkSize;
}
function add(a, prop, start) {
    a.splice(start, 0, prop);
    return a;
}
function chunk(rows, size = chunkSize) {
    const s = isValidInteger(size, 1, 99999, true) ? size : chunkSize;
    const count = rows.length;
    if (count <= s)
        return [rows];
    const chunks = [];
    for (let i = 0; i < count; i += size) {
        chunks.push(rows.slice(i, i + size));
    }
    return chunks;
}
function getCommonValues(a, b) {
    return isArray(a, '>', 0) && isArray(b, '>', 0) ? a.filter((e) => b.includes(e)) : [];
}
function checkCommonValues(a, b) {
    return isArray(a, '>', 0) && isArray(b, '>', 0) ? a.some((e) => b.includes(e)) : false;
}
function deleteProps(arr, props) {
    if (isArray(arr, '>', 0) || isArray(props, '>', 0))
        for (const l of arr) {
            for (const p of props) {
                delete l[p];
            }
        }
    return arr;
}
function flatten(chunks) {
    return isArray(chunks, '>', 0) ? chunks.flat(2) : chunks;
}

export { add, checkCommonValues, chunk, deleteProps, flatten, getChunkSize, getCommonValues, setChunkSize };

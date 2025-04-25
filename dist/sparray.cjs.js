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

'use strict';

/*
MIT License

Copyright (c) 2009 DWTechs

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

https://github.com/DWTechs/Checkard.js
*/

function isNumeric(n) {
    return !isNaN(n - parseFloat(n));
}
function getTag(t) {
    return t == null ? t === undefined ? '[object Undefined]' : '[object Null]' : toString.call(t);
}
function isNumber(n, type = true) {
    return !isSymbol(n) && !((n === null || n === void 0 ? void 0 : n.constructor) === Array) && (type ? Number(n) === n : isNumeric(n));
}
function isSymbol(s) {
    const type = typeof s;
    return type === 'symbol' || (type === 'object' && s != null && getTag(s) === '[object Symbol]');
}

const comparisons = {
    '=': (a, b) => a == b,
    '<': (a, b) => a < b,
    '>': (a, b) => a > b,
    '<=': (a, b) => a <= b,
    '>=': (a, b) => a >= b
};
function isInteger(n, type = true) {
    if (!isNumber(n, type))
        return false;
    const int = Number.parseInt(String(n), 10);
    return type ? n === int : n == int;
}
function isValidInteger(n, min = -999999999, max = 999999999, type = true) {
    return isInteger(n, type) && n >= min && n <= max;
}

function isArray(a, comp, len) {
    return (a === null || a === void 0 ? void 0 : a.constructor) === Array ? (isValidInteger(len, 0, 999999999)) ? comparisons.hasOwnProperty(comp) ? comparisons[comp](a.length, len) : false : true : false;
}

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

exports.add = add;
exports.checkCommonValues = checkCommonValues;
exports.chunk = chunk;
exports.deleteProps = deleteProps;
exports.flatten = flatten;
exports.getChunkSize = getChunkSize;
exports.getCommonValues = getCommonValues;
exports.setChunkSize = setChunkSize;

/*
MIT License

Copyright (c) 2024 DWTechs

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

function _arrayLikeToArray(r, a) {
  (null == a || a > r.length) && (a = r.length);
  for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
  return n;
}
function _createForOfIteratorHelperLoose(r, e) {
  var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (t) return (t = t.call(r)).next.bind(t);
  if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e) {
    t && (r = t);
    var o = 0;
    return function () {
      return o >= r.length ? {
        done: !0
      } : {
        done: !1,
        value: r[o++]
      };
    };
  }
  throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray(r, a) {
  if (r) {
    if ("string" == typeof r) return _arrayLikeToArray(r, a);
    var t = {}.toString.call(r).slice(8, -1);
    return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0;
  }
}

var chunkSize = 100;
function getChunkSize() {
  return chunkSize;
}
function setChunkSize(size) {
  chunkSize = isValidInteger(size, 1, 99999, true) ? size : chunkSize;
  return chunkSize;
}
function chunk(rows, size) {
  if (size === void 0) {
    size = chunkSize;
  }
  var s = isValidInteger(size, 1, 99999, true) ? size : chunkSize;
  var count = rows.length;
  if (count <= s) return [rows];
  var chunks = [];
  for (var i = 0; i < count; i += size) {
    chunks.push(rows.slice(i, i + size));
  }
  return chunks;
}
function getCommonValues(a, b) {
  return isArray(a, '>', 0) && isArray(b, '>', 0) ? a.filter(function (el) {
    return b.includes(el);
  }) : [];
}
function deleteProps(arr, props) {
  if (isArray(arr, '>', 0) || isArray(props, '>', 0)) {
    for (var _iterator = _createForOfIteratorHelperLoose(arr), _step; !(_step = _iterator()).done;) {
      var l = _step.value;
      for (var _iterator2 = _createForOfIteratorHelperLoose(props), _step2; !(_step2 = _iterator2()).done;) {
        var p = _step2.value;
        delete l[p];
      }
    }
  }
  return arr;
}
function flatten(chunks) {
  return isArray(chunks, '>', 0) ? chunks.flat(2) : chunks;
}

export { chunk, deleteProps, flatten, getChunkSize, getCommonValues, setChunkSize };

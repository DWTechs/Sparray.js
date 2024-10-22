// const path = require('path');
const fs      = require('fs');

const mail    = 'https://github.com/DWTechs/Sparray.js';
const CRLF    = '\r\n';
const rel     = './';
const src     = `${rel}build/`;
const dest    = `${rel}dist/`; 
const files   = [
  {
    src:  `${rel}src/sparray.d.ts`,
    dest: `${dest}sparray.d.ts`
  },
  {
    src:  `${src}sparray.cjs.js`,
    dest: `${dest}sparray.cjs.js`
  },
  {
    src:  `${src}sparray.js`,
    dest: `${dest}sparray.js`
  },
];

fs.mkdir(dest, { recursive: false },(err) => {
  if (err) throw err;
  fs.readFile(`${rel}LICENSE`, (err, license) => {
    if (err) throw err;
    for (const file of files) {
      fs.readFile(file.src, (err, fileContent) => {
        if (err) throw err;
        fs.writeFile(file.dest, `/*${CRLF}${license}${CRLF}${mail}${CRLF}*/${CRLF}${CRLF}${fileContent}`, (err) => {
          if (err) throw err;
        });
      });
    }
  });
});
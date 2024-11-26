
const config =  {
  input: "build/es6/sparray.js",
  output: {
    name: "sparray",
    file: "build/sparray.mjs",
    format: "es"
  },
  external: [
    "@dwtechs/checkard",
  ],
  plugins: []
};

export default config;

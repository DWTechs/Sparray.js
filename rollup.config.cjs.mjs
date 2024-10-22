import resolve from "@rollup/plugin-node-resolve";

const config =  {
  input: "build/es6/sparray.js",
  output: {
    name: "sparray",
    file: "build/sparray.cjs.js",
    format: "cjs"
  },
  external: [
  ],
  plugins: [
    resolve(),
  ]
};

export default config;
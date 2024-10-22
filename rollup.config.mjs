import babel from "@rollup/plugin-babel";

const config =  {
  input: "build/es6/sparray.js",
  output: {
    name: "sparray",
    file: "build/sparray.js",
    format: "es"
  },
  external: [],
  plugins: [
    babel({
      // exclude: "node_modules/**" // only transpile our source code
    }),
  ]
};

export default config;

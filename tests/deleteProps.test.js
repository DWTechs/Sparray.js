const { deleteProps } = require("../dist/sparray.cjs");

const arrayToClean = [
  {
    name: "Toto",
    age: 21,
  },
  {
    name: "Titi",
    age: 23,
  },
];
const propsToDelete = ["age"];
const expected = [
  {
    name: "Toto",
  },
  {
    name: "Titi",
  },
];

test("sends array and props to delete to deleteProps", () => {
  expect(deleteProps(arrayToClean, propsToDelete)).toMatchObject(expected);
});

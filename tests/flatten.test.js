import  { flatten } from "../dist/sparray";

const arrayToFlatten = [
  [
    {
      name: "Toto",
      age: 21,
    },
  ],
  [
    {
      name: "Titi",
      age: 23,
    },
  ],
];
const expected = [
  {
    name: "Toto",
    age: 21,
  },
  {
    name: "Titi",
    age: 23,
  },
];

test("sends arrayToFlatten to flatten it to expected", () => {
  expect(flatten(arrayToFlatten)).toMatchObject(expected);
});

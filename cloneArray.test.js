const { expect } = require("@jest/globals");
const cloneArray = require("./cloneArray");

test("should clone the array", () => {
  const cloneThis = [123, 543];
  expect(cloneArray(cloneThis)).toEqual(cloneThis);
  expect(cloneArray(cloneThis)).not.toBe(cloneThis);
});

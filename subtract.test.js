const { expect } = require("@jest/globals");
const subtract = require("./subtract");

test("Subtract 50 from 90", () => {
  expect(subtract(90, 50)).toBe(40);
});

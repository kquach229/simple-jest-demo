const { expect } = require("@jest/globals");
const { checkArray, fetchUser } = require("./functions");
const functions = require("./functions");

test("add two numbers", () => {
  expect(functions.add(2, 5)).toBe(7);
});

test("add two numbers that does not equal to 8", () => {
  expect(functions.add(5, 6)).not.toBe(8);
});

test("should return null", () => {
  expect(functions.isNull()).toBeNull();
});

test("should be falsy", () => {
  expect(functions.checkValue(0)).toBeFalsy();
});

test("user should be Kenny Quach object", function () {
  expect(functions.createUser()).toEqual({
    firstName: "Kenny",
    lastName: "Quach",
  });
});

test("Should be under 1600", () => {
  expect(functions.loadCompare(800, 500)).toBeLessThan(1600);
});

// Do test internally
test("There should be no I in team", () => {
  expect("team").not.toMatch(/I/);
});

test("Admin should be in usernames", () => {
  const usernames = ["user", "guest", "admin"];
  expect(checkArray(usernames)).toContain("admin");
});

test("Contains user Leanne Graham", () => {
  expect.assertions(1);
  return functions.fetchUser().then((data) => {
    expect(data.name).toEqual("Leanne Graham");
  });
});

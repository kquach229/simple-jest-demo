const axios = require("axios");

const functions = {
  add: (num1, num2) => num1 + num2,
  isNull: () => null,
  checkValue: (x) => x,
  createUser: () => {
    const user = {
      firstName: "Kenny",
    };
    user["lastName"] = "Quach";
    return user;
  },
  loadCompare: (load1, load2) => {
    return load1 + load2;
  },
  checkArray: (array) => {
    return array;
  },
  fetchUser: () =>
    axios
      .get("https://jsonplaceholder.typicode.com/users/1")
      .then((res) => {
        return res.data;
      })
      .catch((err) => {
        return "error";
      }),
};

module.exports = functions;

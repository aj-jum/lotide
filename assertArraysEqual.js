const eqArrays = require("../eqArrays");

const assertArraysEqual = function(array1, array2) {
  const message = eqArrays(array1, array2) ? "✅ Assertion Passed: Arrays are equal" : "🛑 Assertion Failed: Arrays are not equal";
  console.log(message);
};

 


module.exports = assertArraysEqual;

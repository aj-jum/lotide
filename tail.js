// Function implementation
const assertEqual = function(actual, expected) {
  console.log(actual === expected ? `✅ Assertion Passed: ${actual} === ${expected}` : `🛑 Assertion Failed: ${actual} !== ${expected}`);
};

//Tail Function
const tail = function(arr) {
  let arrTail = arr.slice(1);
  return arrTail;
};



module.exports = tail;
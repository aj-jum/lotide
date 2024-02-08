
const assertEqual = function(actual, expected) {
  console.log(actual === expected ? `✅ Assertion Passed: ${actual} === ${expected}` : `🛑 Assertion Failed: ${actual} !== ${expected}`);
};

const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    // If lengths are not equal, return false immediately
    return false;
  }

  for (let i = 0; i < array1.length; i++) {
    if (array1[i] !== array2[i]) {
      // If any pair of elements at the same index are not equal, return false
      return false;
    }
  }

  // If the loop completes without finding any unequal elements, return true
  return true;
};

// Test cases
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // should PASS
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false); // should PASS
assertEqual(eqArrays([1, 2, 3], [1, 2, 3, 4]), false); // should PASS
assertEqual(eqArrays([], []), true); // should PASS
assertEqual(eqArrays([1], [1]), true); // should PASS
assertEqual(eqArrays([1], [2]), false); // should PASS
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true); // should PASS
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false); // should PASS

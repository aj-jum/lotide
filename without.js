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

const assertArraysEqual = function(array1, array2) {
  const message = eqArrays(array1, array2) ? "✅ Assertion Passed: Arrays are equal" : "🛑 Assertion Failed: Arrays are not equal";
  console.log(message);
};

const without = function(source, itemsToRemove) {
  let filteredArray = [];
  for (let element of source) {
    if (!itemsToRemove.includes(element)) {
      filteredArray.push(element);
    }
  }
  return filteredArray;
};

console.log(without([1, 2, 3], [1])); // => [2, 3]
console.log(without(["1", "2", "3"], [1, 2, "3"])); // => ["1", "2"]

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);
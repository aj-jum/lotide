const takeUntil = function(array, callback) {
  const results = [];
  for (let item of array) {
    // console.log('item BEFORE: ', item);
    // console.log('item AFTER: ', callback(item));
    // console.log('---');
    if (callback(item)) {
      return results; // Terminate the loop and return results immediately
    }
    results.push(item); // Push the current item into results
  }
  return results; // Return results if the loop completes without callback returning true
}


const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);


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
const message = eqArrays(array1, array2) ? `✅ Assertion Passed: ${array1} === ${array2}` : `🛑 Assertion Failed: ${array1} !== ${array2}`;
console.log(message)};

// Test Case : Callback function always returns false
const data3 = [1, 2, 3, 4, 5];
const results3 = takeUntil(data3, x => x > 10); // Should return the entire array
assertArraysEqual(results3, [1, 2, 3, 4, 5]);

// Test Case : Empty array
const data4 = [];
const results4 = takeUntil(data4, x => x === 5); // Should return an empty array
assertArraysEqual(results4, []);

// Test Case : Callback function always returns true
const data5 = [1, 2, 3, 4, 5];
const results5 = takeUntil(data5, x => true); // Should return an empty array
assertArraysEqual(results5, []);
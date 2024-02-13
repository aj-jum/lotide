const words = ["ground", "control", "to", "major", "tom"];
const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    // console.log('item BEFORE: ', item);
    // console.log('item AFTER: ', callback(item));
    // console.log('---');
    results.push(callback(item))
  }
  return results;
}
const results1 = map(words, word => word[0]);
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

  const numbers = [1, 2, 3, 4, 5];
  const expected1 = [1, 4, 9, 16, 25];
  const result1 = map(numbers, num => num * num);
  assertArraysEqual(result1, expected1);
  
  const words1 = ["apple", "banana", "orange", "kiwi"];
  const expected2 = [5, 6, 6, 4];
  const result2 = map(words1, word2 => word2.length);
  assertArraysEqual(result2, expected2);
  
  const students = [
    { name: "Alice", age: 20 },
    { name: "Bob", age: 22 },
    { name: "Charlie", age: 25 }
  ];
  const expected3 = ["Alice", "Bob", "Charlie"];
  const result3 = map(students, student => student.name);
  assertArraysEqual(result3, expected3);

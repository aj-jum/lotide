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

  return true;
};

const assertArraysEqual = function(array1, array2) {
  const message = eqArrays(array1, array2) ? "✅ Assertion Passed: Arrays are equal" : "🛑 Assertion Failed: Arrays are not equal";
  console.log(message);
};

const middle = function(array){
  const middleIndex = Math.floor(array.length/2)
  if (array.length <= 2){
    return [];
  } else if (array.length % 2 === 1){
    return [array[middleIndex]];
  } else {
    return [array[middleIndex -1], array[middleIndex]];
  }
  
};

module.exports = middle;

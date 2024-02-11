const letterPositions = function(sentence) {
  const results = {};

  for ( let i = 0; i < sentence.length; i++) {
    const char = sentence[i];
    if (char !== ' ') { // Exclude spaces from calculation
      if (results[char]) {
        results[char].push(i); 
      } else {
        results[char] = [i]; 
      }
    }
  }
  
 
  return results;
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

const assertArraysEqual = function(array1, array2) {
  const message = eqArrays(array1, array2) ? "✅ Assertion Passed: Arrays are equal" : "🛑 Assertion Failed: Arrays are not equal";
  console.log(message);
};

const result1 = letterPositions("hello");
assertArraysEqual(result1["h"], [0]);
assertArraysEqual(result1["e"], [1]);
assertArraysEqual(result1["l"], [2, 3]);
assertArraysEqual(result1["o"], [4]);

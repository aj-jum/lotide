const assertEqual = function(actual, expected) {
  console.log(actual === expected ? `✅ Assertion Passed: ${actual} === ${expected}` : `🛑 Assertion Failed: ${actual} !== ${expected}`);
};

const findKeyByValue = function(object, value) {
  // Get an array of keys from the object
  const keys = Object.keys(object);
  
  
  for (const key of keys) {
    // Check if the value of the current key matches the given value
    if (object[key] === value) {
      // If a match is found, return the key
      return key;
    }
  }
  
  // If no match is found, return undefined
  return undefined;
};


const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Expanse"), "sci_fi");
assertEqual(findKeyByValue(bestTVShowsByGenre, "Brooklyn Nine-Nine"), "comedy");
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
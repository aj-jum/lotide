const assertEqual = function(actual, expected) {
  console.log(actual === expected ? `✅ Assertion Passed: ${actual} === ${expected}` : `🛑 Assertion Failed: ${actual} !== ${expected}`);
};

const eqObjects = function(object1, object2) {
  const keys1 = Object.keys(object1);
  const keys2 = Object.keys(object2);

  if (keys1.length !== keys2.length) {
    return false;
  }

  for (let key of keys1) {
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
      if (!eqArrays(object1[key], object2[key])) {
        return false;
      }
    } else if (object1[key] !== object2[key]) {
      return false; 
    }
  }

  return true;
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


    const shirtObject = { color: "red", size: "medium" };
    const anotherShirtObject = { size: "medium", color: "red" };
    assertEqual(eqObjects(shirtObject, anotherShirtObject), true); // => true

    const longSleeveShirtObject = { size: "medium", color: "red", sleeveLength: "long" };
    assertEqual(eqObjects(shirtObject, longSleeveShirtObject), false); // => false

    const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
    const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };
    assertEqual(eqObjects(multiColorShirtObject, anotherMultiColorShirtObject), true); // => true

    const longSleeveMultiColorShirtObject = { size: "medium", colors: ["red", "blue"], sleeveLength: "long" };
    assertEqual(eqObjects(multiColorShirtObject, longSleeveMultiColorShirtObject), false); 
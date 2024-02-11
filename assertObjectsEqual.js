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

const assertObjectsEqual = function(object1, object2) {
  const inspect = require('util').inspect;
  // console.log(`Example object1: ${inspect(object1)}`)
  // console.log(`Example label: ${inspect(object2)}`)
  const message = eqObjects(object1, object2) ? `✅✅✅ Assertion Passed: ${inspect(object1)} === ${inspect(object2)}` : `🛑🛑🛑 Assertion Failed: ${inspect(object1)} !== ${inspect(object2)}`;
  console.log(message);
};

assertObjectsEqual({ name: "John", age: 30 }, { name: "John", age: 30 });
assertObjectsEqual({ name: "John", age: 30 }, { name: "Jane", age: 25 });
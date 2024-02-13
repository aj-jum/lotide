const findKey = function(object, callback) {  
    for (const key in object) {
      if (callback(object[key])) {
        return key;
      }
    }
    return undefined;
  };







const assertEqual = function(actual, expected) {
  console.log(actual === expected ? `✅ Assertion Passed: ${actual} === ${expected}` : `🛑 Assertion Failed: ${actual} !== ${expected}`);
};

const obj1 = {
  a: 1,
  b: 2,
  c: 3
};
assertEqual(findKey(obj1, val => val === 2), 'b');

// Test case 2: Finding a key that does not exist
const obj2 = {
  x: 'foo',
  y: 'bar',
  z: 'baz'
};
assertEqual(findKey(obj2, val => val === 'qux'), undefined);
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

const obj2 = {
  x: 'law',
  y: 'bar',
  z: 'exam'
};
assertEqual(findKey(obj2, val => val === 'suits'), undefined);
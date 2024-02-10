const assertEqual = function(actual, expected) {
  console.log(actual === expected ? `✅ Assertion Passed: ${actual} === ${expected}` : `🛑 Assertion Failed: ${actual} !== ${expected}`);
};

const countLetters = function(word) {
  let result = {};
  for (const letter of word) {
      if (result[letter] !== " " ) {
      if (result[letter]) {
        result[letter] += 1;
      } else {
         result[letter] = 1;
    }
  }
  }
  return result;
};

const result1 = countLetters("sentence");
assertEqual(result1["s"], 1);
assertEqual(result1["e"], 3);
assertEqual(result1["n"], 2);
assertEqual(result1["c"], 2);
assertEqual(result1["p"], 1);
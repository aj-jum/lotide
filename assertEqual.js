//function implementation
const assertEqual = function(actual, expected) {
  console.log(actual === expected ? "✅✅✅ Assertion Passed: " + actual + " === " + expected : "🛑🛑🛑 Assertion Failed " + actual + " !== " + expected);
};



//Test code
assertEqual("LighthouseLabs", "LighthouseLabs");
assertEqual(1, 3);
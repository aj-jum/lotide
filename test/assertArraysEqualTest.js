const  assertArraysEqual = require("../assertArraysEqual");


//Test cases
assertArraysEqual([1, 2, 3], [1, 2, 3]); 
assertArraysEqual([1, 2, 3], [3, 2, 1]); 
assertArraysEqual([1, 2, 3], [1, 2, 3, 4]); 
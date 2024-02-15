// Function implementation
const assertEqual = require('./assertEqual');
// head function
function head(arr) {
  return arr.length > 0 ?  arr[0] : undefined;
};

module.exports = head;

const assert = require('chai').assert;
const tail   = require('../tail');


describe('#tail', () => {
  it('returns 2 for result.length', () => {
    const result = tail(["Hello", "Lighthouse", "Labs"]);
    assert.strictEqual(result.length, 2)
});
  it ('returns Lighthouse for result[0]', () => {
    const result = tail(["Hello", "Lighthouse", "Labs"]);
    assert.strictEqual(result[0], "Lighthouse")
  });
  it ('returns Labs for result[1]', () => {
    const result = tail(["Hello", "Lighthouse", "Labs"]);
    assert.strictEqual(result[1], "Labs")
});
});


// // TEST CODE
// const result = tail(["Hello", "Lighthouse", "Labs"]);
// assertEqual(result.length, 2);
// assertEqual(result[0], "Lighthouse");
// assertEqual(result[1], "Labs");
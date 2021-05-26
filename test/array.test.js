require('./../src/array');
const assert = require('assert');

describe ("Testing Array utilities", () => {
   describe ("Testing Array.nsort()", () => {
       it ("Should reorder the array numerically", () => {
          const testArray = [2, 1, -34, 23, 0];
          const desiredArray = [-34, 0, 1, 2, 23];

          testArray.nsort();
          assert.deepEqual(testArray, desiredArray);
       });
   });
});
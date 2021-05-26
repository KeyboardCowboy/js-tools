require('./../src/date');
const assert = require('assert');

describe ("Testing Date utilities", () => {
    describe ("Testing Date.getWeek()", () => {
        it ("Should return 53", () => {
            const date = new Date("2021-01-01");
            assert.equal(date.getWeek(), 53);
        });

        it ("Should return 1", () => {
            const date = new Date("2021-01-07");
            assert.equal(date.getWeek(), 1);
        });
    });
});
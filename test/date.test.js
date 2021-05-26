require('./../src/date');
const assert = require('assert');

function getDate() {
    // Wednesday.
    return new Date("2021-05-26 12:23:06Z");
}

describe("Testing Date utilities", () => {
    describe("Testing Date.getWeek()", () => {
        it("Should return 53", () => {
            const date = new Date("2021-01-01");
            assert.equal(date.getWeek(), 53);
        });

        it("Should return 1", () => {
            const date = new Date("2021-01-07");
            assert.equal(date.getWeek(), 1);
        });
    });

    describe("Testing Date.setLastWeekday()", () => {
        it("Should return monday's date: 24", () => {
            const date = getDate();
            date.setLastWeekday("monday");
            assert.equal(date.getDate(), 24);
        });
        it("Should return tuesday's date: 25", () => {
            const date = getDate();
            date.setLastWeekday("Tuesday");
            assert.equal(date.getDate(), 25);
        });
        it("Should return wednesday's date: 19", () => {
            const date = getDate();
            date.setLastWeekday("WEDNESDAY");
            assert.equal(date.getDate(), 19);
        });
        it("Should return thursday's date: 20", () => {
            const date = getDate();
            date.setLastWeekday("thu");
            assert.equal(date.getDate(), 20);
        });
        it("Should return friday's date: 21", () => {
            const date = getDate();
            date.setLastWeekday("FRI");
            assert.equal(date.getDate(), 21);
        });
        it("Should return saturday's date: 22", () => {
            const date = getDate();
            date.setLastWeekday("Sat");
            assert.equal(date.getDate(), 22);
        });
        it("Should return sunday's date: 23", () => {
            const date = getDate();
            date.setLastWeekday("Sunday");
            assert.equal(date.getDate(), 23);
        });
    });
});
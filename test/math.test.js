require('./../src/math');
const assert = require('assert');

describe ("Testing Math utilities", () => {
    describe('Testing Math.dround()', () => {
        it('Should round to a whole number', () => {
            assert.equal(Math.dround(2.3456), 2);
        });

        it('Round to one decimal place', () => {
            assert.equal(Math.dround(2.3456, 1), 2.3);
        });

        it('Round to two decimal places', () => {
            assert.equal(Math.dround(2.3456, 2), 2.35);
        });
    });

    describe("Testing Math.ceilX()", () => {
        it("Should round 23 up to 25", () => {
            assert.equal(Math.ceilX(23, 5), 25);
        });

        it("Should round 23 up to 30", () => {
            assert.equal(Math.ceilX(23, 15), 30);
        });

        it("Should round 23 up to 100", () => {
            assert.equal(Math.ceilX(23, 100), 100);
        });

        it("Should round 123 up to 125", () => {
            assert.equal(Math.ceilX(123, 5), 125);
        });

        it("Should round 123.5 up to 135", () => {
            assert.equal(Math.ceilX(123.5, 15), 135);
        });
    });
});

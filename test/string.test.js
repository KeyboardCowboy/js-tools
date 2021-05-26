require('./../src/string');
const assert = require('assert');

describe("Testing String utilities", () => {
    describe('Testing String.lpad()', () => {
        it('Should prepend a 0s until string is 4 chars long', () => {
            const str = '';
            assert.equal(str.lpad("0", 4), "0000");
        });

        it('Should prepend a 0s until string is 4 chars long', () => {
            const str = '55';
            assert.equal(str.lpad("0", 4), "0055");
        });

        it('Should not change string', () => {
            const str = '12354';
            assert.equal(str.lpad("0", 4), "12354");
        });
    });
});

describe("Testing String utilities", () => {
    describe('Testing String.rpad()', () => {
        it('Should append 0s until string is 4 chars long', () => {
            const str = '';
            assert.equal(str.rpad("0", 4), "0000");
        });

        it('Should append 0s until string is 4 chars long', () => {
            const str = '55';
            assert.equal(str.rpad("0", 4), "5500");
        });

        it('Should not change string', () => {
            const str = '12354';
            assert.equal(str.rpad("0", 4), "12354");
        });
    });
});
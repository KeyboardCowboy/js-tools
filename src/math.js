/**
 * Returns the ceiling value of a number rounded up to the nearest multiple integer.
 *
 * Examples:
 *   - Math.ceilX(123, 5) === 125
 *   - Math.ceilX(123.5, 15) ===  ???
 *
 *   How does this actually work?
 *
 * @param x
 * @param y
 * @returns {number}
 */
Math.ceilX = function(x, y) {
    return Math.ceil(x / y) * y;
}
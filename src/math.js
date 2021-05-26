/**
 * Returns the ceiling value of a number rounded up to the nearest multiple integer.
 *
 * Examples:
 *   - Math.ceilX(123, 5) === 125
 *   - Math.ceilX(123.5, 15) === 135
 *
 * @param x
 * @param y
 * @returns {number}
 */
Math.ceilX = function(x, y) {
    return Math.ceil(x / y) * y;
}

/**
 * Round a number to the nearest decimal point.
 *
 * @param num
 * @param decimalPlaces
 * @returns {number}
 */
Math.dround = function(num, decimalPlaces) {
    decimalPlaces = decimalPlaces || 0;
    const factor = Math.pow(10, decimalPlaces);
    // const factor = 10**decimalPlaces;  // ES7

    if (decimalPlaces === 0) {
        return Math.round(num);
    }
    else {
        return Math.round(num * factor) / factor;
    }
}
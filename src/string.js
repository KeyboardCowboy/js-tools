/**
 * Left-pad a string.
 *
 * @param padString
 * @param length
 * @returns {string}
 */
String.prototype.lpad = function (padString, length) {
    let str = '';
    const toPad = length - this.length;

    while (str.length < toPad) {
        str += padString;
    }

    return str + this;
}

/**
 * Right-pad a string.
 *
 * @param padString
 * @param length
 * @returns {string}
 */
String.prototype.rpad = function (padString, length) {
    let str = '';
    const toPad = length - this.length;

    while (str.length < toPad) {
        str += padString;
    }

    return this + str;
}
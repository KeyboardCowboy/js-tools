/**
 * Sort an array numerically instead of lexographically.
 */
Array.prototype.nsort = function () {
    this.sort((a, b) => parseInt(a) - parseInt(b));
}
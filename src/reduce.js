/**
 * @template T, U
 * @param {(previousValue: U, currentValue: T, currentIndex: number, array: T[]) => U} callbackfn
 * @param {U} [initialValue]
 * @returns {U}
 */

/**
 * @template T
 * @param {(previousValue: T, currentValue: T, currentIndex: number, array: T[]) => T} callbackfn
 * @param {T} [initialValue]
 * @returns {T}
 */
function reduce(callbackfn, initialValue) {
  // your implementation
}

module.exports = { reduce };

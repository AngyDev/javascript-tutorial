/**
 * FROM
 *
 * The from() static method creates a new, shallow-copied Array instance from an iterable or array-like object.
 *
 * Parameters:
 * arrayLike: An iterable or array-like object to convert to an array
 * mapFn: Map function to call on every element of the array
 *
 * Returns:
 * A new Array instance.
 *
 */

const array = [1, 2, 3, 4];

const copied = Array.from(array);

console.log("copied:", copied); // [1, 2, 3, 4]

const copiedAndUpdated = Array.from(array, (x) => x + x);

console.log("copiedAndUpdated", copiedAndUpdated); // [2, 4, 6, 8]

const arrayFromString = Array.from("foo");

console.log("arrayFromString:", arrayFromString); // ["f", "o", "o"]

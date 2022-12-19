/**
 * INCLUDES
 *
 * The includes() method determinates whether an array includes a certain value among its entries.
 * Returns a boolean.
 *
 * Parameters:
 * searchElement: the value to search for
 * fromIndex: zero-based index at which to start searching, converted to an integer.
 *
 */

const array = [1, 2, 3, 4];

console.log("initialArray:", array);

const includesTwo = array.includes(2);

console.log("includesTwo:", includesTwo); // true

const includeTwoIntoTwo = array.includes(2, 2);

console.log("includeTwoIntoTwo", includeTwoIntoTwo); // false - element two in position two

const includeTwoIntoOne = array.includes(2, 1);

console.log("includeTwoIntoOne", includeTwoIntoOne); // true - element two in position one

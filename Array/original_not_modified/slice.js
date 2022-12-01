/**
 * SLICE
 * 
 * The slice() method returns a shallow copy of a portion of an array into a new array object
 * selected from start to end (end not included) where start and end represents the index of
 * items in that array. The original array will NOT be modified.
 * 
 * Slice without parameters returns a copy of the array
 * 
 * It is possible to pass only the start parameter, the copy will begin from the start to 
 * the end of the array array.slice(2)
 * 
 * If the start parameter is negative the new array will be composed with the last items
 * of the array array.slice(-2) returns the last two element of the array
 * 
 * If the start and the end parameter are equal the return value will be an empty array
 */
const array = [1, 2, 3, 4];

console.log("initialArray:", array);

const newArray = array.slice(0, -1); // returns a new array the same of intial array but without the last element
const initialArrayCopy = array.slice();

console.log("newArray", newArray); // [1, 2, 3]
console.log("initialArrayAfterSlice", array); // [1, 2, 3, 4] is the same of the beginning, it is not modified
console.log([].slice(0, -1)); // [] returns an empty array
console.log("initialArrayCopy:", initialArrayCopy); // [1, 2, 3, 4] A copy of the initial array

console.log(array.slice(1, 2))

/**
 * SPLICE
 *
 * The splice() method changes the contents of an array by removing or replacing existing
 * elements and/or adding new elements in place. Returns an array containing the deleted elements.
 * If no elements are removed, an empty array is returned.
 * Splice is a MUTATING method.
 *
 * The method has 3 parameters:
 * start: the index at which to start changing the array
 * deleteCount: an integer indicating the number of elements in the array to remove from start
 * item1,...,itemN: The elements to add to the array, beginning from start
 *
 */

const array = [1, 2, 3, 4, 4.1, 4.2, 4.3];

console.log("initialArray:", array);

array.splice(array.length, 0, 5); // adds the number "5" at the end of the array and removes 0 elements

console.log(array); // [1, 2, 3, 4, 5]

const remove5 = array.splice(4, 1); // removes only the element in the 4 position

console.log("remove5:", remove5); // [5] returns the removed element
console.log("arrayAfterRemove5:", array); // [1, 2, 3, 4]
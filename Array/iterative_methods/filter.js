/**
 * FILTER
 *
 * The filter() method creates a shallow copy of a portion of a given array, filtered down
 * to just the elements from the given array hat pass the test implemented by the provided function.
 * It returns an ARRAY. If no elements pass the test, an empty array will be returned.
 *
 * The method doesn't mutate the array on which it is called but the callbackFn can.
 *
 */

const array = [1, 2, 3, 4];

console.log("initialArray:", array);

const filteredArray = array.filter((item) => item > 2);

console.log("filteredArray:", filteredArray); // [3, 4]
console.log("initialArrayAfterFilter:", array); // [ 1, 2, 3, 4 ]

// ---------------
// Modifying items
// ---------------

const words = ["spray", "limit", "exuberant", "destruction", "elite", "present"];

const modifiedWords = words.filter((word, index, arr) => {
  arr[index + 1] += " extra"; // adds "extra" word to the current element
  return word.length < 6; // returns only the words of length less 6
});

console.log("modifiedWords:", modifiedWords); // ["spray"]
console.log("initialArrayAfterFilter:", words); //  ['spray', 'limit extra', 'exuberant extra', 'destruction extra', 'elite extra', 'present extra', 'undefined extra']

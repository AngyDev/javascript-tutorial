/**
 * EVERY
 *
 * The every() methods tests whether ALL elements in the array pass the test implemented
 * by the provided function. It returns a BOOLEAN.
 *
 * It is an interative method. It calls a provided callbackFn once for each element in the array,
 * until the cb returns a falsy value. If such an element is found, every() immediately returns
 * false and stops iterating through the array.
 *
 * The method doesn't mutate the array on which it is called but the callbackFn can
 *
 */

const array = [1, 2, 3, 4];

console.log("initialArray:", array);

const isBelowFive = array.every((item) => item < 5);
const isOverFour = array.every((item) => item < 4);

console.log("isBelowFive:", isBelowFive); // true
console.log("isOverFour:", isOverFour); // false, the test is not passed from all the elements

console.log(
  "emptyArray:",
  [].every((item) => item > 4)
); // true, all the elements satisfy any given condition

// ---------------
// Modifying items
// ---------------

const arr = [1, 2, 3, 4];

/**
 * elem: is the current element being processed in the array
 * index: the index of the current element being processed in the array
 * arr: the array every() was called upon
 */
arr.every((elem, index, arr) => {
  arr[index + 1]--;
  console.log(`[${arr}][${index}] -> ${elem}`);
  return elem < 2; // the cb function runs until the elem is less than 2
});

// ------
// EXAMPLES of usage with other iterative methods
// ------

// Tests if all elements of an array are present in another array
const isSubset = (array1, array2) => array2.every((element) => array1.includes(element));

console.log("isSubset:", isSubset([1, 2, 3, 4, 5, 6, 7], [5, 7, 6])); // true
console.log("isSubset:", isSubset([1, 2, 3, 4, 5, 6, 7], [5, 8, 7])); // false

/**
 * SORT
 *
 * The sort() method SORTS the elements of an array in place and return the reference to the same array, now sorted.
 * The default sort order is ASCENDING, built upon converting the elements into strings,
 * then comparing their sequences of UTF-16 code units values.
 * Sort is a MUTATING method.
 *
 * If the array is empty returns an ampty array.
 *
 * Sort can be a parameter, a function that defines the sort order. The return value should be a
 * number whose positivity indicates the relative order of the two elements. The function is called
 * with two parameters, 'a' and 'b'.
 *
 * IMPORTANT: The sort function convert the array elements into strings, if you what sort an integer array
 * you need to pass a function to the sort function. See the example below.
 * 
 * The last example shows you how to sort an array without mutate the original array
 *
 */

const months = ["March", "Jan", "Feb", "Dec"];

console.log("initialArray:", months); // ['March', 'Jan', 'Feb', 'Dec']

const sortedMonths = months.sort();

console.log("sortedMonths:", sortedMonths); // [ 'Dec', 'Feb', 'Jan', 'March' ]
console.log("------------");

const array = [1, 30, 4, 21, 100000];

console.log("initialArray:", array); // [ 1, 30, 4, 21, 100000 ]

const sortedArray = array.sort();

console.log("sortedArray:", sortedArray); // [ 1, 100000, 21, 30, 4 ]
console.log("initialArrayMutated:", array); //  [ 1, 100000, 21, 30, 4 ]
console.log("emptyArray:", [].sort()); // []
console.log("------------");

const integerArray = [1, 30, 4, 21, 100000];

console.log("initialArray:", integerArray);

const sortedIntegerArray = array.sort((a, b) => a - b);

console.log("sortedIntegerArray:", sortedIntegerArray); // [ 1, 4, 21, 30, 100000 ]
console.log("------------");

const numbers = [3, 1, 4, 1, 5];
// [...numbers] creates a shallow copy, so sort() does not mutate the original
const sorted = [...numbers].sort((a, b) => a - b);

console.log("sortedArray:", sorted); // [ 1, 1, 3, 4, 5 ]
console.log("initialArray:", numbers[0]); // 3

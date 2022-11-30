/**
 * FILL
 *
 * The fill() method changes all elements in an array to a static value, from a start index to
 * an end index. It returns the modified array. Fill is a MUTATING method.
 * 
 * The method has 3 parameters:
 * value: Value to fill the array with
 * start: Zero-based index at which to start filling
 * end: Zero-based index at which to end filling
 * 
 */

const array = [1, 2, 3, 4];

console.log("initialArray:", array);

array.fill(0);

console.log("initialArrayAfterFill:", array); // [0, 0, 0, 0]

array.fill(1, 1);

console.log("initialArrayAfterFillStart:", array); // [0, 1, 1, 1]

array.fill(2, 2, 3);

console.log("initialArrayAfterFillStartEnd:", array); // [0, 1, 2, 1]


// Populates an empty array of 5 elements with the text "test"
const tempTests = Array(5).fill("test", 0);

console.log("tempTests:", tempTests); // [ 'test', 'test', 'test', 'test', 'test' ]


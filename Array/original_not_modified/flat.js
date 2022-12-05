/**
 * FLAT
 *
 * The flat() method creates a NEW array with all sub-array elements concatenated
 * into it recursively up to the specified depth.
 * Returns a shallow copy that contains the same elements as the ones from the original array.
 * The original array will NOT be modified.
 *
 * It has an optional parameter:
 * depth: The depth level specifying how deep a nested array structure should be flattened. Defaults to 1.
 * A possible value of depth is "Infinity".
 * 
 */

const array = [[1, 2], 3, [4, 5]];

console.log("initialArray:", array);

const arrayFlattened = array.flat();

console.log("arrayFlattened:", arrayFlattened); // [ 1, 2, 3, 4, 5 ]
console.log("arrayAfterFlat:", array); // [[1, 2], 3, [4, 5]] it's not modified

const arr4 = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]]; 

console.log(arr4.flat(Infinity)); // [1, 2, 3, 4,  5, 6, 7, 8, 9, 10]

/**
 * UNSHIFT
 * 
 * The unshift() method adds one or more elements at the beginning of the array and returns the new length of the array
 * Unshift is a MUTATING method.
 * 
 */
const array = [1, 2, 3, 4];

console.log("initialArray:", array);

const newLength = array.unshift(0);

console.log("newLength:", newLength); // 5
console.log("initialArrayAfterUnshift:", array); // [0, 1, 2, 3, 4]
console.log("emptyArray:", [].unshift(1)); // [1]
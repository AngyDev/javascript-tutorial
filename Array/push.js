/**
 * PUSH
 * 
 * The push() method adds one or more elements to the end of an array and returns the new length of the array.
 * Push is a MUTATING method.
 * 
 */

const array = [1, 2, 3, 4];

console.log("initialArray:", array);

const newLength = array.push(5);

console.log("newLength:", newLength); // 5
console.log("arrayAfterPush:", array); // [1, 2, 3, 4, 5]
console.log("emptyArray:", [].push(1)); // [1]
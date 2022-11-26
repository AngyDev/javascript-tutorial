/**
 * POP
 *
 * The pop() method REMOVES the last element of the array and returns that element.
 * This method changes the length of the array. Pop is a MUTATING method.
 *
 * If the array is empty, returns undefined.
 *
 */

const array = [1, 2, 3, 4];

console.log("initialArray:", array);

const lastArrayElement = array.pop();

console.log("lastArrayElement:", lastArrayElement); // 4
console.log("initialArrayMutated:", array); // [1, 2, 3]
console.log("emptyArray:", [].pop()); // undefined

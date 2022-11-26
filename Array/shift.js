/**
 * SHIFT
 * 
 * The shift() method REMOVES the first element of the array and returns that element.
 * This method changes the length of the array. Shift is a MUTATING method.
 * 
 * If the array is empty returns undefined.
 * 
 */
const array = [1, 2, 3, 4];

console.log("initialArray:", array);

const firstArrayElement = array.shift();

console.log("firstArrayElement:", firstArrayElement); // 1
console.log("initialArrayMutated:", array); // [ 2, 3, 4 ]
console.log("emptyArray", [].shift()); // undefined
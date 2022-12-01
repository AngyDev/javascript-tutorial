/**
 * CONCAT
 * 
 * The concat() method is used to merge two or more arrays. The methods returns a new array.
 * The array will first be populated by the elements in the object on which it is called, then, 
 * for each argument its value will be concatenated into the array.
 * The original array will NOT be modified.
 * 
 * It is possible to use the concat method also to merge string "abc".concat("def") returns a string
 * "abcdef"
 */

const array = [1, 2, 3, 4];
const arrayString = ["a", "b", "c"];

console.log("initialArray:", array);

const newArray = array.concat(5);
const newArrayString = arrayString.concat("d");

console.log("newArray:", newArray) // [1, 2, 3, 4, 5];
console.log("initialArray:", array); // [1, 2, 3 ,4]
console.log("arrayString:", newArrayString); // ["a", "b", "c", "d"]
console.log("abc".concat("def")); // "abcdef"
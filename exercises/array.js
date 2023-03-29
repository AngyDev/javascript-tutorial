/**
 * Write a function to check whether an 'input' is array or not
 */
const is_array = (input) => {
  return input instanceof Array;
};

console.log("---- isArray ----");
console.log(is_array("w3resource"));
console.log(is_array([1, 2, 3, 4]));
console.log(is_array({ id: 1 }));

const is_array2 = (input) => {
  if (toString.call(input) === "[object Array]") {
    return true;
  }
  return false;
};

console.log("---- isArray2 ----");
console.log(is_array2("w3resource"));
console.log(is_array2([1, 2, 3, 4]));
console.log(is_array2({ id: 1 }));

/**
 * Write a function to clone an array
 */
const arrayClone = (array) => {
  return [...array];
};

// alternative solutions
const arrayClone2 = (array) => {
  return array.slice(0);
};

const arrayClone3 = (array) => {
  return Array.from(array);
};

console.log("---- arrayClone ----");
console.log(arrayClone3([1, 2, 4, 0]));
console.log(arrayClone3([1, 2, [4, 0]]));

/**
 * Write a JavaScript function to get the first element of an array.
 * Passing a parameter 'n' will return the first 'n' elements of the array.
 */
const first = (array, number) => {
  if (number < 0) return [];
  return number ? array.slice(0, number) : array[0];
};

console.log("---- first ----");
console.log(first([7, 9, 0, -2]));
console.log(first([], 3));
console.log(first([7, 9, 0, -2], 3));
console.log(first([7, 9, 0, -2], 6));
console.log(first([7, 9, 0, -2], -3));

/**
 * Write a JavaScript function to get the last element of an array. 
 * Passing a parameter 'n' will return the last 'n' elements of the array.
 */

const last = (array, number) => {
  return number ? array.slice(Math.max(array.length - number, 0)) : array[array.length - 1];
}

console.log("---- last ----");
console.log(last([7, 9, 0, -2]));
console.log(last([7, 9, 0, -2],3));
console.log(last([7, 9, 0, -2],6));
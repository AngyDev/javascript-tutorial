/**
 * FIND
 *
 * The find() methods returns the FIRST element of the array that satisfies the provided
 * testing function. If no values satisfy the testing function, undefined is returned. The method
 * doesn't mutate the provided array.
 *
 * The method doesn't mutate the array on which it is called but the callbackFn can.
 * 
 */

const array = [1, 2, 3, 4];

console.log("initialArray:", array);

const find4 = array.find((item) => item === 4);

console.log("find4:", find4); // 4

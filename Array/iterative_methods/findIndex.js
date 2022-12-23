/**
 * FIND INDEX
 *
 * The findIndex() method returns the index of the FIRST element in an array that
 * satisfies the provided testing function. If no elements satisfy the testing function,
 * -1 is returned.
 * 
 * The method doesn't mutate the array on which it is called but the callbackFn can.
 *
 */

const array = [1, 2, 3, 4];

console.log("inialArray:", array);

const isLargeNumber = array.findIndex((item) => item > 2);

console.log("isLargeNumber:", isLargeNumber); // 2

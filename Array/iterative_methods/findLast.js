/**
 * FIND LAST
 *
 * The findLast() method iterates the array in reverse order and returns the value
 * of the FIRST element that satisfies the provided testing function. If no elements
 * satisfy the testing function, undefined is returned.
 *
 * The method doesn't mutate the array on which it is called but the callbackFn can.
 *
 */

const array = [1, 2, 3, 4];

console.log("inialArray:", array);

const found = array.findLast((element) => element > 2);

console.log("found:", found); // 4

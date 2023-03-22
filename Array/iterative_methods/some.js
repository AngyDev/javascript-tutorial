/**
 * SOME
 * 
 * The some() method tests whether at least one element in the array passes the test implemented by
 * the provided function. It returns true if, in the array, it finds an element for which the 
 * provided function returns true; otherwise it returns false.
 * 
 * The method doesn't mutate the array on which it is called.
 * 
 */

const array = [1, 2, 3, 4]

console.log("initialArray:", array);

const even = array.some((item) => item % 2 === 0);

console.log(even); // true
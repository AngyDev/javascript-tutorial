/**
 * INDEXOF
 * 
 * The indexOf() method returns the FIRT index at which a given element can be found
 * in the array, or -1 if it is not present.
 * 
 * Parameters:
 * searchElement: Element to locate in the array.
 * fromIndex: Zero-based index at which to start searching.
 * 
 */

const array = [1, 2, 3, 4]

console.log("initialArray:", array); // [1, 2, 3, 4]

const indexOfThree = array.indexOf(3);

console.log("indexOfThree:", indexOfThree); // 2

const indexOfFive = array.indexOf(5);

console.log("indexOfFive:", indexOfFive); // -1 - the element 5 is not present
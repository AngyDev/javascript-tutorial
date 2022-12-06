/**
 * FLAT MAP
 * 
 * The flatMap() method returns a NEW array formed by applying a given callback function to each 
 * element of the array, and then flattening the result by one level. It is the same to use a 
 * map followed by a flat.
 * 
 */

const array = [1, 2, [3], [4, 5], 6, []];

console.log("initialArray:", array);

const flattened = array.flatMap(num => num);

console.log(flattened); // [ 1, 2, 3, 4, 5, 6 ]

// ---------------
// Different result using map and flatMap
// ---------------

const arr1 = ["it's Sunny in", "", "California"];

arr1.map((x) => x.split(" ")); // [["it's","Sunny","in"],[""],["California"]]

arr1.flatMap((x) => x.split(" ")); // ["it's","Sunny","in", "", "California"]

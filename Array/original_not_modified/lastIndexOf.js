/**
 * LAST INDEX OF
 *
 * The lastIndexOf() method returns the last index at which a given element can
 * be found in the array, or -1 if the element is not present
 *
 * Parameters:
 * searchElement: the element to search
 * fromIndex: Index at which to start searching the backwards
 */

const array = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Monday",
];

console.log("initialArray:", array);

const indexMonday = array.lastIndexOf("Monday");

console.log("indexMonday:", indexMonday); // 5

const indexSunday = array.lastIndexOf("Sunday");

console.log("indexSunday:", indexSunday); // -1

const indexMondayFirst = array.lastIndexOf("Monday", 2); // searches from 2 to 0

console.log("indexMondayFirst:", indexMondayFirst); // 0

// ------------------
// Search occurrences
// ------------------

const indices = [];
const arrayLet = ["a", "b", "a", "c", "a", "d"];
const element = "a";

let idx = arrayLet.lastIndexOf(element);

while (idx !== -1) {
  indices.push(idx);
  idx = idx > 0 ? arrayLet.lastIndexOf(element, idx - 1) : -1;
}

console.log("occurrences:", indices);

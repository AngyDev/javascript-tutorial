/**
 * JOIN
 *
 * The join() method creates and returns a new string by concatenating all of the
 * elements in an array, separated by commas or a specified separator string.
 *
 * parameters:
 * separator: optional, specifies a string to separate each element of the array
 */

const array = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];

console.log("initialArray:", array);

const days = array.join();

console.log("Days:", days); // Monday,Tuesday,Wednesday,Thursday,Friday

const daysSeparator = array.join("/");

console.log("/ separator:", daysSeparator); // Monday/Tuesday/Wednesday/Thursday/Friday

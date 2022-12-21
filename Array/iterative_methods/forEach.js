/**
 * FOREACH
 *
 * The forEach() method executes a provided function once for each array element.
 * Returns UNDEFINED.
 *
 * The method doesn't mutate the array on which it is called but the callbackFn can.
 *
 */

const array = [1, 2, 3, 4];

console.log("initialArray:", array);

const returnsValue = array.forEach((item) => item * 2);

console.log("returns:", returnsValue); // undefined

const arrayMultiple = [];

// adds to the new array the items of initial array multiplied by 2.
array.forEach((item) => arrayMultiple.push(item * 2));

console.log("arrayMultiple:", arrayMultiple); // [ 2, 4, 6, 8 ]

// ---------
// Modifying the array during iteration
// ---------

const array1 = [1, 2, 3, 4];

array1.forEach((item) => {
  console.log(item);
  if (item === 2) {
    array1.shift(); // removes the first element of the array
  }
});

console.log("arrayModified", array1);

// ---------
// Flatten an array
// ---------

const flatten = (array) => {
  const result = [];

  array.forEach((item) => {
    // if the item is an array call recursively the function
    if (Array.isArray(item)) {
      result.push(...flatten(item));
    } else {
      result.push(item)
    }
  });

  return result;
};

const nested = [1, 2, 3, [4, 5, [6, 7], 8, 9]];
console.log(flatten(nested)); // [1, 2, 3, 4, 5, 6, 7, 8, 9]

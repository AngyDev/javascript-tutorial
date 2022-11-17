/**
 * Given an array of integers, where all elements but one occur twice, find the unique element.
 *
 * a = [1, 2, 3, 4, 3, 2, 1]
 * 
 * result = The unique element is 4
 */

const array = [1, 2, 3, 4, 3, 2, 1];

// Long version without JavaScript functions and object
const lonelyInteger = (array) => {
  const max = Math.max(...array);
  const newArray = new Array(max).fill(0);

  for (let i = 0; i < array.length; i++) {
    let count = 0;
    for (let j = 0; j < array.length; j++) {
      if (array[i] === array[j]) {
        count++;
      }
    }
    newArray[array[i]] = count;
  }

  const index = newArray
    .map((item, index) => {
      if (item === 1) {
        return index;
      }
    })
    .filter((item) => item !== undefined);

  return index[0];
};

console.log(lonelyInteger(array));

// Short version with reduce and object
const lonelyIntegerFunc = (array) => {
  // const count = {};

  // for (const item of array) {
  //   if (count[item]) {
  //     count[item]++;
  //   } else {
  //     count[item] = 1;
  //   }
  // }

  // count the occurrences 
  const count = array.reduce((prev, curr) => ((prev[curr] = ++prev[curr] || 1), prev), {});

  return Object.keys(count).find((key) => count[key] === 1);
};

console.log(lonelyIntegerFunc(array));

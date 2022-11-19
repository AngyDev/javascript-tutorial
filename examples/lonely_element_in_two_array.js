/**
 * Given two array find the unique element
 *
 * a = [1, 2, 2, 3]
 * b = [1, 2]
 *
 * result = [3]
 */

const a = [1, 2, 2, 3];
const b = [1, 2];

const singleElement = (a, b) => {
  const newArray = [...a, ...b];

  return newArray.filter((item) => !(a.includes(item) && b.includes(item)));
};

console.log(singleElement(a, b));

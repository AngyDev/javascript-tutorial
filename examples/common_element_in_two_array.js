/**
 * Given two array find the common elements
 *
 * a = [1, 2, 2, 3]
 * b = [1, 2]
 *
 * result = [1, 2]
 */

const commonElement = (a, b) => {
  const newArray = [...a, ...b];

  const result = newArray.filter((item) => a.includes(item) && b.includes(item));

  return [...new Set(result)];
};

console.log(commonElement(a, b));

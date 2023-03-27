/**
 * Write a function to check whether an 'input' is array or not
 */
const is_array = (input) => {
  return input instanceof Array;
};

console.log(is_array("w3resource"));
console.log(is_array([1, 2, 3, 4]));
console.log(is_array({ id: 1 }));

const is_array2 = (input) => {
  if (toString.call(input) === "[object Array]") {
    return true;
  }
  return false;
};

console.log(is_array2("w3resource"));
console.log(is_array2([1, 2, 3, 4]));
console.log(is_array2({ id: 1 }));

/**
 * Write a function to clone an array
 */
const arrayClone = (array) => {
  return [...array];
};

// alternative solutions
const arrayClone2 = (array) => {
  return array.slice(0);
};

const arrayClone3 = (array) => {
  return Array.from(array)
}

console.log(arrayClone3([1, 2, 4, 0]));
console.log(arrayClone3([1, 2, [4, 0]]));

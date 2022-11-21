/**
 * Given an array, the number of elements in the array and the number of steps of rotation return the rotated array
 *
 * a = [1, 2, 3, 4, 5];
 * arrayLength = 5;
 * rotationSteps = 2;
 *
 * return = [4, 5, 1, 2, 3];
 */

const a = [1, 2, 3, 4, 5];
const arrayLength = 5;
const rotationSteps = 2;

const rotation = (array, arrayLength, rotationSteps) => {
  while (rotationSteps != 0) {
    // remove the last element of the array and put it in the first position
    array.unshift(...array.splice(arrayLength - 1, 1));
    
    rotationSteps--;
  }

  return array;
};

console.log(rotation(a, arrayLength, rotationSteps));

const array = [1, 2, 3, 4];

array.pop(); // removes the LAST element, returns the element => MUTATING METHOD
array.shift(); // removes the FIRST element, returns the element => MUTATING METHOD
array.slice(0, -1); // removes the last element, returns the array without the last element

array.push(1); // adds the element to the end of the array, returns the new length => MUTATING METHOD
array.unshift(0) // adds the element to the start of the array, returns the new length => MUTATING METHOD
array.concat(1) // adds the element to the end of the array , returns the array with the new element
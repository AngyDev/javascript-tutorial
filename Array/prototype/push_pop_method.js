/**
 * Array support Stack operations like: Push & Pop
 * and we can implement our own push and pop operation with prototype.
 * it is very useful in some cases if you wanna modify an array like a stack.
 * just try push or pop when you wanna modify the head or tail of an array.
 * 
 * Usage:
 * 
 * let cities = ['Florence','Shanghai','Rome']
 * var first = cities.pop();// pop operation
 * cities.push('Berlin'); 
 */

const cities = ['Florence', 'Shanghai', 'Rome'];
console.log(cities);

// ---------------
// Push Method : The push() method adds a new element to an array (at the end)
// ---------------

cities.push('Berlin');
console.log(cities); // [ 'Florence', 'Shanghai', 'Rome', 'Berlin' ]
cities.push('Guangzhou');
console.log(cities); // [ 'Florence', 'Shanghai', 'Rome', 'Berlin', 'Guangzhou' ]
cities.push('Shenzhen');
console.log(cities); // [ 'Florence', 'Shanghai', 'Rome', 'Berlin', 'Guangzhou', 'Shenzhen' ]

// ---------------
// Pop Method : The pop() method removes the last element from an array
// ---------------

console.log('=============')
let city = cities.pop();
console.log(city);  // Shenzhen
console.log(cities);// [ 'Florence', 'Shanghai', 'Rome', 'Berlin', 'Guangzhou' ]
city = cities.pop();
console.log(city);  // Florence
console.log(cities);// [ 'Florence', 'Shanghai', 'Rome', 'Berlin' ]
city = cities.pop();
console.log(city);  // Berlin
console.log(cities);// [ 'Florence', 'Shanghai', 'Rome' ]
console.log('=============')

// ---------------
// Add Push & Pop Method Test
// ---------------

Array.prototype.clear = function () {
    while (this.length != 0) {
        this.pop()
    }
}

const stack = []
console.log('=============')
console.log(stack)
stack.push('New York')
stack.push('Tuscany')
stack.push('Rennes')
stack.push('Oslo')
console.log(stack)   // [ 'New York', 'Tuscany', 'Rennes', 'Oslo' ]

console.log('=============')
console.log('before clear:' + stack)
stack.clear()
console.log('after clear:' + stack) // []
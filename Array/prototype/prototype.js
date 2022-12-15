/**
 * prototype
 * 
 * 
 * Definition & Usage
 * All JavaScript objects inherit properties and methods from a prototype.
 * prototype allows you to add new properties and methods to arrays.prototype is available with all 
 * JavaScript objects.
 * 
 * Usage
 * 
 * Array.prototype.name = value
 * Or
 * Array.prototype.method = function(param1,param2){
 *    console.log('Enjoy coffee with Angela The Great')
 * }
 * 
 */

const arrayOfNames = ['Angela', 'Lucas', 'Leonardo da Vinci', 'Michelangelo', 'Galileo Galilei', 'Leonardo Fibonacci', 'Gaius Julius Caesar']

console.log('arrayOfNames:' + arrayOfNames)

// ---------------
// Adding Properties
// ---------------

Array.prototype.type = 'Custom-Array'
Array.prototype.superfamily = 'Hominoidea'
Array.prototype.nationality = 'Italy'
Array.prototype.first_language = 'Latin'

console.log('type:' + arrayOfNames.type)
console.log('superfamily:' + arrayOfNames.superfamily)
console.log('nationality:' + arrayOfNames.nationality)
console.log('first_language:' + arrayOfNames.first_language)

// ---------------
// Adding Methods
// ---------------

Array.prototype.new_reverse = function () {
    var left = 0
    var right = this.length - 1
    while (left < right) {
        var temp = this[left]
        this[left] = this[right]
        this[right] = temp
        left++;
        right--;
    }
    return this;
}

console.log('============')
console.log('empty:' + [].new_reverse())
console.log('before reverse: ' + arrayOfNames) // [ 'Angela','Lucas','Leonardo da Vinci','Michelangelo','Galileo Galilei','Leonardo Fibonacci','Gaius Julius Caesar' ]
arrayOfNames.new_reverse()
console.log('after  reverse: ' + arrayOfNames) // [ 'Gaius Julius Caesar','Leonardo Fibonacci','Galileo Galilei','Michelangelo','Leonardo da Vinci','Lucas','Angela' ]
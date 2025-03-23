# Values, Types and Operators

## Values

Values are chunks that represent pieces of information. All values are made of bits and they play different roles. Every value has a *type* that determines its role. Some values are numbers, some values are pieces of text, some values are functions, and so on.

## Types

### Numbers

The main thing to do with numbers is arithmetic. Arithmetic operations such as addition or multiplication take two number values and produce a new number from them.

`100 + 4 * 11`

When operators appear together without parentheses, the order in which they are applied is determined by the *precedence* of the operators. In our example, the precedence will be multiplication, so we will have 4 multiplied by 11 plus 100. If we want to do the sum first, we must add the parentheses as follows:

`(100 + 4) * 11`

The are some special numbers like:
`NaN` (Not a Number), `Infinity`, `-Infinity`

### Strings

Strings are used to represent text. They are written by enclosing their content in quotes.

```text
`Down on the sea`
"Lie on the ocean"
'Float on the ocean'
```

If we want to use some special character like the newline we have to use the backslash ( \ ). Whenever it is found inside quoted text, it indicates that the character after it has a special meaning. This is called *escaping* the character.

```text
"This is the first line\nAnd this is the second"
```

The result will be

```text
This is the first line
And this is the second
```

It is possible to use the operator + with strings, in this case it does not add, but it *concatenates* two strings together.

```text
"con" + "cat" + "e" + "nate" = "concatenate"
```

Backtick-quoted strings, called *template literal*, can do some trinks. Apart from being able to span lines, they can also embed other values.

```text
`half of 100 is ${100 / 2}` = half of 100 is 50
```

When you write something inside ${} in a template literal, its result will be computed, converted to a string, and included at that position.

### Boolean

The Boolean type has only two values, true and false. We can use them to make comparisons between numbers or strings.

```javascript
console.log(3 > 2)
// -> true
console.log(3 < 2)
// -> false
console.log("Aardvark" < "Zoroater")
// -> true
```

When comparing strings, JavaScript goes over the characters from left to right, comparing the Unicode codes one by one.

```javascript
console.log("Apple" == "Orange")
// -> false
```

```javascript
console.log(NaN == NaN)
// -> false
```

NaN is supposed to denote the result of a nonsensical computation, and as such, it isn't equal to the resul of any other nonsensical computations.

There are also some operations that can be applied to Boolean values themselves. JavaScript supports three logical operators: *and, or*, and *not*. (check the table in the operators section to see how to reprensent and use them).

```javascript
1 + 1 == 2 && 10 * 10 > 50
```

### Empty

The are two special values, `null` and `undefined`, that are used to denite the absence of a meaningful value. They are themselves values, but they are curry no information. They are mostly interchangeable.

## Automatic Type Conversion

When an operator is applied to the "wrong" type of value, JavaScript will quietly convert that value to the type it needs. This is called *type coercion*.

```javascript
console.log(8 * null)
// -> 0
console.log("3" - 1)
// -> 2
console.log("3" + 1)
// -> 31
console.log("five" * 5)
// -> NaN
```

The null in the first expression becomes 0, and the "5" in the second expression becomes 5. In most cases , it just tries to convert one of the values to the other value's type. When null or undefined occurs on either side of the operator, it prodices true only if both sides are one of null or undefined.

```javascript
console.log(null == undefined)
// -> true
console.log(null == 0)
// -> false
```

When you do not want any automatic type conversions to happen, there are two additional operators: `===` and `!==`

## Operators

Unary Operators: They take only one value

Binary Operators: They take two values

Ternary Operators: They take three values

| Operator type | Operator                | Description                                                                                                                                                                                                                                   | Usage                                                                         |
| ------------- | ----------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------- |
| Unary         | `typeof`                | It produces a string value naming the type of the value you give it                                                                                                                                                                           | `typeof 4.5`                                                                  |
| Unary         | `!`                     | it flips the value given to it                                                                                                                                                                                                                | `console.log(!true) -> false console.log(!false) -> true`                     |
| Binary        | `+`, `-`, `*`, `/`, `%` | arithmetic operators                                                                                                                                                                                                                          | `3 + 2`, `3 - 2`, `3 * 2`, `12 / 2`, `314 % 100`                              |
| Binary        | `>`, `>=`               | is greater than, is greater equal than                                                                                                                                                                                                        | `3 > 2`, `3 >= 2`                                                             |
| Binary        | `<`, `<=`               | is less than, is less equal than                                                                                                                                                                                                              | `3 < 2` , `3 <= 2`                                                            |
| Binary        | `&&`                    | it represents logical *and*, its result is true if both the values given to it are true                                                                                                                                                       | `console.log(true && false) -> false console.log(true && true) -> true`       |
| Binary        | `\|\|`                  | it represents logical *or*, its result is true if either the values given to it is true                                                                                                                                                       | `console.log(false \|\| true) -> true console.log(false \|\| false) -> false` |
| Binary        | `===`                   | it tests whether a value is *precisely* equal to the other                                                                                                                                                                                    | `console.log(3 === 3) -> true`                                                |
| Binary        | `!==`                   | it tests whether a value is not *precisely* equal to the other                                                                                                                                                                                | `console.log(3 !== 2) -> true`                                                |
| Ternary       | `?:`                    | it represents a *conditional* operator. The value on the left of the question mark "picks" which of the other two values will come out. When it is true, it chooses the middle value, and when it is false, it chooses the value on the right | `console.log(true ? 1 : 2) -> 1 console.log(false ? 1 : 2) -> 2`              |

### Short-Circuiting of Logical Operators

The logical operators `&&` and `||` convert the value on their left side to Boolean type in order to decide what to do. 

The `||` operator will return the value to its left when that can be converted to true and will return the value on its right otherwise.

```javascript
console.log(null || "user")
// -> user
```

The `&&` operator will return the value to its left when that can be converted to false and will return the value on its right otherwise.

**Note:** The part on their right is evaluated *only* when necessary. In the case of `true || X` will return true without evaluate X. In the case of `false && X` will return false and will ignore X.

/*
Conditional Tests: Write a series of conditional tests. Print a statement describing each test and your prediction for the results of each test. Your code should look something like this:

let car = 'subaru';

console.log("Is car == 'subaru'? I predict True.")

console.log(car == 'subaru')

• Look closely at your results, and make sure you understand why each line evaluates to True or False.

• Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.
*/
let fruits: string[] = ["apple", "banana", "orange"];

// Try to access an element that doesn't exist
console.log(fruits[3]); // Produces an index error

// Correct the error by accessing a valid index
console.log(fruits[2]); // Prints "orange"

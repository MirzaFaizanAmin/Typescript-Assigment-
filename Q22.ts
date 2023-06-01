/*
Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program.
*/
let fruits: string[] = ["apple", "banana", "orange"];

// Try to access an element that doesn't exist
console.log(fruits[3]); // Produces an index error

// Correct the error by accessing a valid index
console.log(fruits[2]); // Prints "orange"

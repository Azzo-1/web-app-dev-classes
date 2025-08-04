// Challenge 1 Starter
// Initialise the array
let numbers = [1, 2, 3, 4, 5];

// Use the pop() method to remove the last element from the array
let lastElement = numbers.pop();

numbers.pop();

// Use the unshift() method to add the last element to the beginning of the array
numbers.unshift(lastElement);

numbers.unshift(7, 8);
// Use the slice() method to exclude the first 3 elements and return a new array
let newArray = numbers.slice(3);

let newNumbers = numbers.splice(0, 2);

// Set the value of the output field inner html to the new array
let outField = document.getElementById("Output field");
outputField.innerHTML = newArray;

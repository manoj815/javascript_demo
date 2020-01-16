# javascript_demo & interview Questions
This repository include small programs or some javascript tricks.

1. How Does a Function Expression Differ from a Function Declaration?

A function declaration uses the keyword function , followed by the name of the function. By contrast, a function expression begins with var , let or const , followed by the name of the function and the assignment operator = . Here are some examples:
// Function Declaration
function sum(x, y) {
  return x + y;
};

// Function Expression: ES5
var sum = function(x, y) {
  return x + y;
};
// Function Expression: ES6+
const sum = (x, y) => { return x + y };



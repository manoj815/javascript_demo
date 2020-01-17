# javascript_demo & interview Questions
This repository include small programs or some javascript tricks.

<b>Q1. How Does a Function Expression Differ from a Function Declaration?</b>

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

#<b>Q2.What happens if you assign a variable without a var keyword?</b>

If we define a variable without using a var or let keyword at all? Technically, if this variable x hasn’t already been defined, then x = 1 is shorthand for window.x = 1.
To prevent this shorthand altogether, you can use strict mode — introduced in ES5 — by writing use strict at the top of your document or a particular function. Then, when you try to declare a variable without a keyword, you’ll get an error: Uncaught SyntaxError: Unexpected indentifier.

<b>Q3.What is the use of Void(0)?</b>

Void(0) is used to prevent the page from refreshing and parameter "zero" is passed while calling.

Void(0) is used to call another method without refreshing the page.

<b>Q.4//Predict the value of i </b>

let i = ?;
console.log(i + 1); // 1
console.log(i - 1); // -1
console.log(i * i); // 0
console.log(i / i); // 1

<b>Q.5 How to make any document editable?</b>

document.body.contentEditable=true;

<b>Number format in javascript</b>

let num = 2_00_000;
console.error(num);
  





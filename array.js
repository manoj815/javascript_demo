//This file have some tricks about
//Javascript array


let array = [1,2,5];
array[5] =6;
array;
array.length = 0; //after assigning array.length to zero array is empty
array; //[]

//##################################################

const ary = [1,3,4,5,7,8];
ary.shift(); //Remove  element from start
console.log(ary);
//Array(6) [ 3, 4, 5, 7, 8 ]

ary.unshift(5);
console.log(ary);
//Array(6) [ 5, 3, 4, 5, 7, 8 ]
ary.pop() //remove element from last

//5) [1, 3, 4, 5, 7]

ary.push(10); // Add element in last
//(6) [1, 3, 4, 5, 7, 10];

//

var arr = [];
for(i=0; i <= 5; i++)
{
    arr.push(function(){
    console.log(i);
    })
}

for(var index = 0; index<=5;index++)
{
    console.log(arr[index]());
}
//Out put of above program is 
//6
//6
//6
//6
//6
 //as the variable i gets hoisted to the top of the code snippet and the final value of i is 5 after the code gets executed.

//suppose if we want to Print 0-5
//By using IIFE’s we can also scope the value of the variable i to print the current index, instead of printing the final value as 10
var arr = [];
for(i=0; i <= 5; i++)
{
    (function(val){
    arr.push(function(){
    console.log(val);
})
    })(i)
}
for(var index = 0; index<=5;index++)
{
    console.log(arr[index]());
}
// ES6 for-of loop is a loop that supports ES6 iteration (via iterables and iterators) and destructuring. If you combine destructuring with the new Array method entries(), you get:

const arr = ['a', 'b', 'c'];
for (const [index, elem] of arr.entries()) {
    console.log(`index = ${index}, elem = ${elem}`);
}

let array = Array(5).fill('');
console.log(array); // outputs (5) ["", "", "", "", ""]








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







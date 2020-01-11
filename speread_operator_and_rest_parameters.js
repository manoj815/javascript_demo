//suppose we have an array and we have to find highest number
//in that array
//Math.Max take arguments as list of elements rather than array
//So we use spread operator ... three dots to convert array to list of elements


console.log(Math.max(10, 5, 99, 55));
const array = [10, 5, 99, 55];
console.log(Math.max(...array));

//rest parameters are opposite to spread operator,rest parameter convert
//function argument to an array

const makeArray = (...args) => {
    return args;
}

console.log(makeArray(1, 2, 6, 5, 3, 2));
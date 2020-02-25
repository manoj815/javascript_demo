//Object destructuring
const user = {
    name: 'manoj',
    age: 35,
    profile: 'https://www.linkedin.com/in/manoj-kumar-0815/',
    connections: 1000,
    posts: 10
};
//We can directly get the variables for the object’s properties using the following syntax:

const { name, profile, blogs, followers } = user;

console.log(name); //manoj
console.log(age); //35
console.log(profile); //https://www.linkedin.com/in/manoj-kumar-0815/
console.log(connections); //1000
console.log(posts); //10


let myVar = 'foo';
let otherVar = 2;

// output:
// {myVar: "foo", otherVar: 2}
console.log({myVar, otherVar});

//Swapping two variables
let a = 1;
let b = 2;

[b, a] = [a, b];

//Dynamic Property Names

const dynamic = 'email';
let user = {
    name: 'John',
    [dynamic]: 'john@doe.com'
}
console.log(user); // outputs { name: "John", email: "john@doe.com" }

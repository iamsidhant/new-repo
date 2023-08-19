// Primitive

// 7 Types : String, Number, Boolean, null, Undefined, Symbol, bigint
const country = "India"
const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol("123")
const anotherId = Symbol("123")
// console.log(id === anotherId);

const bigNumber = 3456596321331n



// Reference (Non-Primitive)

// Arrays, Objects, Functions

const heroes = ["Shaktimaan", "Naagraj", "G-One", "Doga"]
let myObj = {
    name: "Sidhant",
    age: 24,
}

const myFunction = function() {
    console.log("Hello World");
}

// console.log(typeof country);         // string
// console.log(typeof scoreValue);      // number
// console.log(typeof isLoggedIn);      // boolean
// console.log(typeof outsideTemp);     // object
// console.log(typeof userEmail);       // undefined
// console.log(typeof id);              // symbol
// console.log(typeof bigNumber);       // bigint

// console.log(typeof heroes);         // object
// console.log(typeof myObj);          // object
// console.log(typeof myFunction);     // function

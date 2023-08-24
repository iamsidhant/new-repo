// if
const isUserLoggedIn = true
const temperature = 41

// if (temperature === 40) {
//     console.log("Temperature is less than 50");
// } else {
//     console.log("Temperature is greater than 50");
// }

// console.log("Execute");
// <, >, >=, <=, ==, !=, ===


const score = 200

// if (score > 100) {
//     let power = "fly"
//     console.log(`User power: ${power}`);
// }

// console.log(`User power: ${power}`);             // gives error because of block scope of let


const balance = 1010

// if (balance < 500) {
//     console.log("less than 500");
// } else if(balance < 750){
//     console.log("more than 500 but less than 750");
// } else if (balance < 900) {
//     console.log("more than 750 but less than 900");
// } else {
//     console.log("more than 900");
// }


const userLoggedIn = true
const debitCard = true
const loggedinfromGoogle = false
const loggedinfromEmail = true

if (userLoggedIn && debitCard) {
    console.log("Student can buy Course");
}

if (loggedinfromGoogle || loggedinfromEmail) {
    console.log("User logged in");
}


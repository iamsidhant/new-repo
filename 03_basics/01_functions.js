
function sayMyName() {
    console.log("S");
    console.log("I");
    console.log("D");
    console.log("H");
    console.log("A");
    console.log("N");
    console.log("T");
}

// sayMyName()

// function addTwoNumbers(number1, number2) {
//     console.log(number1 + number2);
// }

function addTwoNumbers(number1, number2) {
    // let result = number1 + number2;
    // return result

    return number1 + number2
}

const result = addTwoNumbers(3, 15)
// console.log("Result: ", result);

function loginUserMessage(username = "Sachin") {
    if (!username) {
        console.log("Please enter a username");
        return 
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("Sidhant"));
console.log(loginUserMessage());



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
// console.log(loginUserMessage());



function calculateCartPrice(val1, val2,...num1){

    return num1
}
// console.log(calculateCartPrice(200, 400, 500, 600));

const User = {
    username: "Sidhant",
    price: 911
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and Price is ${anyobject.price}`);
}

// handleObject(User)
handleObject({
    username: "Ekam",
    price: 1231
})


const myNewArray = [500, 600, 900, 100]

function returnSecondValue(getArray){
    return getArray[3]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([700, 600, 264, 310, 100]));

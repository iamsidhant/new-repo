const user = {
    username: "sidhant",
    price: 999,

    welcomeMessage: function() {
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }
}
// user.welcomeMessage()
// user.username = "ekam"
// user.welcomeMessage()

// console.log(this);


// function chai(){
//     let username = "sidhant"
//     console.log(this.username);
// }

// chai()

// const chai = function(){
//     let username = "sidhant"
//     console.log(this.username);
// }


const chai = () =>{
    let username = "sidhant"
    console.log(this);
}

// chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// const addTwo = (num1, num2) =>  num1 + num2

// const addTwo = (num1, num2) =>  (num1 + num2)

const addTwo = (num1, num2) =>  ({username: "sidhant"})


console.log(addTwo(3, 6));



// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()


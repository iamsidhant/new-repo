// function init() {
//     let name = "Mozilla";
//     function displayName() {
//         // displayName() is the inner function, that forms the closure
//         console.log(name);
//     }
//     displayName();
// }
// init();

// function outer(){
//     let username = "sidhant"
//     console.log("OUTER", secret);
//     function inner(){
//         let secret = "my123"
//         console.log("inner", username);
//     }
//     function innerTwo(){
//         console.log("innerTwo", username);
//         console.log(secret);
//     }
//     inner()
//     innerTwo()

// }
// outer()
// console.log("TOO OUTER", username);

// Lexical Scoping - Inner function has access to scope of outer function but vice-versa is not true. Inner functions not have access to scope of each other function.


// function makeFunc() {
//     const name = "Mozilla";
//     function displayName() {
//       console.log(name);
//     }
//     return displayName;
// }
  
// const myFunc = makeFunc();
// myFunc();

// A closure is the combination of a function and the lexical scope within which that function was declared.




// document.getElementById("orange").onclick = function(){
//     document.body.style.backgroundColor = "orange"
// }
// document.getElementById("green").onclick = function(){
//     document.body.style.backgroundColor = "green"
// }

function clickHandler(color){
    // document.body.style.backgroundColor = `${color}`
    
    return function(){
        document.body.style.backgroundColor = `${color}`
    }
}

document.getElementById("orange").onclick = clickHandler("orange")
document.getElementById("green").onclick = clickHandler("green")

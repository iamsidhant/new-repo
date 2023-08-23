// var c = 300
let a = 310

if (true) {
    let a = 10
    const b = 20
    // console.log("INNER: ", a);
}

// console.log(a);
// console.log(b);
// console.log(c);



function one() {
    const username = "sidhant"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);            // error

    two()

}

// one()


if (true) {
    const username = "sidhant"
    if (username === "sidhant") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);                    // error
}

// console.log(username);


// ++++++++++++++++     Interesting     ++++++++++++++++++++++

console.log(addOne(5));

function addOne(num) {
    return num + 1
}


// addTwo(5)

const addTwo = function (num) {
    return num + 2
}


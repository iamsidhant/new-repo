// Array

const myArr = [6, 5, 3, 4, 2, 1, 0]
const myHeroes = ["Batman", "Spiderman", "Shaktimaan", "Naagraj", "Shahrukh Khan", "Sachin Tendulkar"]

const myArr2 = new Array(1, 2, 3, 4, 6, 7)
// console.log(myArr[0]);

// Array Methods

// myArr.push(11)
// myArr.push(10)
// myArr.pop()

// myArr.unshift(9)
// myArr.shift()

// console.log(myArr.includes(6));
// console.log(myArr.indexOf(1));

const newArr = myArr.join()
// console.log(myArr);
// console.log(typeof newArr);


// slice, splice

console.log("A", myArr);

let myn1 = myArr.slice(1, 3)
console.log(myn1);

console.log("B", myArr);

let myn2 = myArr.splice(1, 3)       // splice affects original array by taking out its elements
console.log("C", myArr);
console.log(myn2);


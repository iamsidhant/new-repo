const name = "Sidhant"
const repoCount = 12

// console.log(name + repoCount + " Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String("Sidhant-sa-in")
// console.log(gameName[0]);
// console.log(gameName.__proto__);


// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(4));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0, 6)
console.log(newString);

const anotherString = gameName.slice(-8, 3)
console.log(anotherString);

const newString2 = "    Sidhant     "
console.log(newString2);
console.log(newString2.trim());

const url = "https://sidhant.com/sidhant*18arya"
console.log(url.replace("*18", "-"));

console.log(url.includes('anger'));

console.log(gameName.split('-'));
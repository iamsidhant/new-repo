// singleton
// Object.create

// object literals

const mySym = Symbol("key1")

const JsUser = {
    name: "Sidhant",
    "full name": "Sidhant Arya",
    [mySym]: "mykey1",
    age: 24,
    email: "sidhant@google.com",
    city: "Nabha",
    isLoggedIn: false,
    lastLoggedDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["full name"]);

// console.log(JsUser[mySym]);

JsUser.email = "sidhant@microsoft.com"
// Object.freeze(JsUser)
JsUser.email = "sidhant@safari.com"

// console.log(JsUser);


JsUser.greeting = function() {
    console.log("Hello JS User");
}

JsUser.greeting2 = function() {
    console.log(`Hello JS User, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greeting2());

const user = {
    username: "Sidhant",
    logCount: 8,
    signedIn: true,

    getUserDetails: function(){
        // console.log("Got user details from database");
        // console.log("Username: ${this.username}");
        console.log(this);
    }
}


// console.log(user.username);
// console.log(user.getUserDetails());
// console.log(this);


function User(username, logCount, signedIn){
    this.username = username;
    this.logCount = logCount;
    this.signedIn = signedIn;

    this.greeting = function(){
        console.log(`Welcome {this.username}`);
    }
    return this
}

const userOne = new User("Sidhant", 10, true)
const userTwo = new User("intel", 11, false)
console.log(userOne.constructor);
// console.log(userTwo);

function SetUsername(username){
    // DB Calls
    this.username = username
    console.log("called");
}

function createUser(username, email, password){
    SetUsername.call(this, username)

    this.email = email
    this.password = password
}

const Chai = new createUser("Sidhant", "sa@google.com", "123")
console.log(Chai);

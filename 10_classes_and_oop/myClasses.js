// ES6

class User{
    constructor(username, email, password){
        this.username = username;
        this.email = email;
        this.password = password
    }

    encryptPassword(){
        return `${this.password}abc`
    }
    changeUsername(){
        return `${this.username.toUpperCase()}`
    }
}

const humanity = new User("human", "humanity@gmail.com", "123")

console.log(humanity.encryptPassword());
console.log(humanity.changeUsername());

// Behind the scene

function Required(username, email, password){
    this.username = username;
    this.email = email;
    this.password = password
}

User.prototype.encryptPassword = function(){
    return `${this.password}abc`
}

User.prototype.changeUsername = function(){
    return`${this.username.toUpperCase()}`
}

const natural = new User("nature", "natural@gmail.com", "123")

console.log(natural.encryptPassword());
console.log(natural.changeUsername());

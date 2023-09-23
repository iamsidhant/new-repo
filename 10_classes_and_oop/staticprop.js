class User{
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`USERNAME is ${this.username}`);
    }

    static createId(){
        return `123`
    }
}

const sidhant = new User("sidhant")
// console.log(sidhant.createId());

class Teacher extends User{
    constructor(username,email){
        super(username)
        this.email = email
    }
}

const iphone = new Teacher("iphone", "i@phone", "123")
console.log(iphone.createId());
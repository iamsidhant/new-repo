class User{
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`USERNAME is ${this.username}`);
    }
}

class Teacher extends User{
    constructor(username, email, password){
        super(username)
        this.email = email
        this.password = password
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`);
    }
}

const water = new Teacher("water", "H2O@teacher.com", "123")
water.logMe()


const juice = new User("juice")
juice.logMe()

console.log(water instanceof User);
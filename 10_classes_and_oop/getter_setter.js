class User{
    constructor(email, password){
        this.email = email,
        this.password = password
    }

    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
        this._email = value
    }

    get password(){
        return `${this._password}sidhant`
    }
    set password(value){
        this._password = value
    }

}

const sidhant = new User("sidhant@15", "123")
console.log(sidhant.email);
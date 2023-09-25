const User = {
    _email: "s@sa.com",
    _password: "abc",

    get email(){
        return this._email.toUpperCase()
    },
    set email(value){
        this._email = value
    }
}

const milk = Object.create(User)

console.log(milk.email);

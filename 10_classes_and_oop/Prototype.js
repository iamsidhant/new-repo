// let Myname = "Sidhant   ";
// let language = "javascript  "

// console.log(Myname.trueLength);


let myHeroes = ["thor", "spiderman"]

let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpidermanPower: function(){
        console.log(`Spidy Power is ${this.spiderman}`);
    }

}


Object.prototype.Sidhant = function(){
    console.log(`God is present in every human`);
}

Array.prototype.heySidhant = function(){
    console.log(`You can deal with any situation`);
}

// myHeroes.Sidhant()
// myHeroes.heySidhant()
// heroPower.Sidhant()
// heroPower.heySidhant()


//      Inheritance     //

const User = {
    name: "Sidhant",
    email: "compute@gmail.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: "JS Assignment",
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User


// Modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)

let anotherUsername = "GitHub   "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is:  ${this.trim().length}`);
}

anotherUsername.trueLength()
"Sidhant".trueLength()
"Ekam".trueLength()

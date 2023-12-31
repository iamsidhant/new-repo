// const tinderUser = new Object()      // Singleton Object
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "Shruti"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Shruti",
            lastname: "Yadav"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);


obj1 = {1: "a", 2: "b"}
obj2 = {3: "a", 4: "b"}
obj4 = {5: "a", 6: "b"}

// const obj3 = {obj1, obj2}                                    // Problematic
// const obj3 = Object.assign({}, obj1, obj2, obj4)

const obj3 = {...obj1, ...obj2, ...obj4}
// console.log(obj3);



const users = [
    {
        id: 1,
        email: "s@gmail.com"
    },
    {
        id: 1,
        email: "s@gmail.com"
    },
    {
        id: 1,
        email: "s@gmail.com"
    },
]

users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty("isLoggedIn"));



const course = {
    coursename: "js in hindi",
    fee: "Rs 999",
    courseInstructor: "hitesh"
}

// course.courseInstructor
const {courseInstructor: Instructor} = course

// console.log(courseInstructor);
console.log(Instructor);

// {
//     "name": "hitesh",
//     "course": "js in hindi",
//     "price": "free"
// }

[
    {},
    {},
    {}
]

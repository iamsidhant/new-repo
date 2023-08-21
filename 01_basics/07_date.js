// Dates

let myDate = new Date
// console.log(myDate.toString()); 
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
console.log(typeof myDate);
// console.log(myDate.toLocaleTimeString());

// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toTimeString());

// let myCreatedDate = new Date(2023, 8, 7)
// let myCreatedDate = new Date(2023, 8, 7, 10, 30)
// let myCreatedDate = new Date("2023-12-22")
let myCreatedDate = new Date("12-22-2023")
// console.log(myCreatedDate.toLocaleString());

let TimeStamp = Date.now()
// console.log(TimeStamp);                      // time from Jan 1,1970
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
// console.log(newDate);
// console.log(newDate.getMonth() + 1);
// console.log(newDate.getDay());

// let Now = `${newDate.getDay()} and the time is ${newDate.getTime()}`
// console.log(Now);

newDate.toLocaleString('default',{
    weekday: 'long',

})


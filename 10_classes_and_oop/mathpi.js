const descripter = Object.getOwnPropertyDescriptor(Math, "PI")

// console.log(descripter);

// console.log(Math.PI);
// Math.PI = 5
// console.log(Math.PI);

const coffee = {
    name: 'Espresso',
    price: 500,
    isAvailable: true,

    orderCoffee: function(){
        console.log("coffee nhi bni");
    }
}

console.log(Object.getOwnPropertyDescriptor(coffee, "price"));

Object.defineProperty(coffee, "price", {
    writable: false,
    enumerable: false
})

console.log(Object.getOwnPropertyDescriptor(coffee, "price"));

for (let [key, value] of Object.entries(coffee)) {
    if (typeof value !== 'function') {
        
        console.log(`${key}: ${value}`);
    }
}

// getOwnPropertyDescriptor Used to change const values
// for

for (let i = 0; i <= 10; i++) {
    const element = i;
    if (element == 6) {
        // console.log("6 is best number");
    }
    // console.log(element);
}

// const element = i;

for (let i = 1; i <= 10; i++) {
    // console.log(`Outer loop value is: ${i}`);

    for (let j = 1; j <= 10; j++) {
        // console.log(`Inner loop value is: ${j} and Outer loop value is: ${i}`);        
        // console.log(i + " * " + j + " = " + i * j);
    }

}

let myArray = ["flash", "batman", "superman"]
// console.log(myArray.length);
for (let index = 0; index < myArray.length; index++) {
    const element = myArray[index];
    // console.log(element);
}



// break and continue

// for (let index = 1; index <= 20; index++) {
//     if (index == 5) {
//         console.log(`Detected 5`);
//         break
//     }
//     console.log(`Value of index is ${index}`);

// }

for (let index = 1; index <= 20; index++) {
    if (index == 5) {
        console.log(`Detected 5`);
        continue
    }
    console.log(`Value of index is ${index}`);

}

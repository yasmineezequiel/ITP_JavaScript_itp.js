newArray = [1, 2, 3];
myArray = newArray [1];
console.log(myArray)

// this is the 3rd exercise 
// DataType 123/12 // is a number
//DataType "Things in quotes!" // is a string 
//DataType undefined // is undefined = not there or variable missing


// Exercise 4

let hour = 10;

if (hour >= 6 && hour < 12) {
    console.log("Good morning");
}
else if (hour >= 12 && hour < 18) {
    console.log("Good afternoon")
}
else if (hour >= 18 && hour < 24) {
    console.log("Good evening")
}
else if (hour >= 24){
    console.log("This time is based in 24hr")
}
// Good morning

// Exercise 5
let myArray = ['Thomas', 'Noel', 'Faraz'];
let emptyArray = []
for (let n=0; n < myArray.length; n++) {
emptyArray.push(myArray[n]);
};
console.log(emptyArray[n]);
//not the same as in Ruby


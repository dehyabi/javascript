// A variable is a container for storing data
// A variable behaves as if it was the value that it contains

// Two steps:
// 1. Declarations (var, let, const)
// 2. Assignment (= assignment operator)

let firstName = "Dehya"; //strings
let age = 31; //numbers
let teacher = true; //booleans

console.log("Hello", firstName);
console.log("You are", age, "years old");
console.log("enrolled:", teacher);

document.getElementById("p1").innerHTML= "Hello " + firstName;
document.getElementById("p2").innerHTML= "You are " + age + " years old";
document.getElementById("p3").innerHTML= "Enrolled: " + teacher;

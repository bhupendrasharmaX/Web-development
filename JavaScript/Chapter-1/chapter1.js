console.log("Hello world");
console.log("Hey I'm Bhupendra sharma");
fullName = "Bhupendra sharma" //sting
age = 20;
price = 100;
x = null;
y = undefined;
isFollow  = true;
console.log("My name is:",fullName);
console.log("My age:",age);
console.log("The price of the tamato in today's market is:",price);

// let,var and const.
let fullName1 = "Raj" // using let we can update the value.
const Pi = 3.14; // using const we cannot update the value.It is fixed.

console.log(fullName1);
console.log("The value of PI is:",Pi);

// Data types in JS

let age1 = 24;
console.log("The type of age is:",typeof age1);

// How to create the object.

const student = {
    fullName2 : "Bhupendra sharma",
    age2: 20,
    cgpa : 8.5,
    isPass : true   
};
student["fullName2"] = "Raj sharma";
console.log(student);
console.log("The data type of the student variable is:",typeof(student)) ; 
console.log("The cgpa of the student is:",student.cgpa); // is same as student["cgpa"] 
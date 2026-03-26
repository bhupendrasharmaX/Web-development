console.log("hello World");

// What is comment?
// This is single line comment

/*
This is multi line comment and comment are the part that is not excute in our
code, we use comment for our knowladge. 
*/

// Arithmetic Operators
let a = 10;
let b = 4;
// console.log("The value of a = 10 and b = 4") 
console.log("----Arithmetic Operators----");
console.log("a = ",a,"& b = ",b);
console.log("The value of a + b =",a + b);
console.log("The value of a - b =",a - b);
console.log("The value of a * b =",a * b);
console.log("The value of a / b =",a / b);
console.log("The value of a % b =",a % b);
console.log("The value of a ^ b =",a ** b);  // a**b = a^b

//Unary Operators it is part of arithmetic operators

console.log("----Unary Operators----");
a++; // same a = a+1
console.log("The value of a after a++ = ",a);
// console.log("a++ = ",a++);

//Assignment operators
console.log("----Assignment operators----");
a += 4; // same as a = a + 4
console.log("a = ",a)

//Comparison Operators
let c = 4;
let d = 2;
console.log("----Comprasion Operators-----");
console.log("c = ",c,"& d = ",d);
console.log(" Is 4==2,", c==d); // Equal to operator
console.log(" Is 4!=2,", c!=d); // Not Equal to operator

// Logical Operators
console.log("----Logical Operators----");
console.log("Cond1(c<d) && Cond2(c==4)", c<d && c==4); // Logical AND
console.log("Cond1(c>d) || Cond2(c==d)", c>d || c==d); // Logical OR

// Condition Statements
let age = 20;
console.log("----Condition Statement----");

// if statement
if(age >=18){
    console.log("You can vote in the Election");
}

// if-else statement
let color;
let mode = "blue"; 
if(mode == "dark"){
    color = "Black";
}else{
    color = "White"
}
console.log(color);

// Odd or even number
let num = 2;
if(num%2 == 0){
    console.log(num,"is even");
}else{
    console.log(num,"is odd");
}

// else-if statement
if(mode=="dark"){
    color = "dark";
}else if(mode=="blue"){
    color = "Blue";
}else{ 
    color = "White";
}
console.log(color);

// Ternary Operators

let result = age>18 ? "Adult":"Not Adult";
console.log(result);
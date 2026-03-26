/* Create a function using the function keyword that takes a string as an 
argument and returns the number of vowels in the String.*/

function numVowels(str)
{
    let count = 0;
     for(const char of str)
    {
        if(char === "a" || char === "e" || char === "i" || char === "o" || char === "u")
        {
            count++;
        }
    }
    console.log(count); 
}
console.log("Number Of vowels in the string:");
numVowels("bhupendra");

// For a given array of numbers print the square of each value using forEach loop.

let arr = [1,2,3,4,5];
console.log("\nSquare of the element in the array:");
arr.forEach((val)=>{
    console.log(val**2);
})

// We are given array of marks of students. Filter out of the marks of students that scored 90+.
let marks = [35,56,45,67,90,96,97];
let result = marks.filter((val)=>{
    return val > 90;
})
console.log(result);

// Take a number 'n' an input from user. Create an array of numbers from 1 to n.
let n= prompt("Enter any value");
let arr3 = [];
for(let i = 1; i<=n ; i++){
    arr3[i-1] = i;
}
console.log(arr3);

// Use the reduce method to calculate sum of all numbers in the array.
let sum = arr3.reduce((prev, curr)=>{
    return prev + curr;
})
console.log("Sum",sum);

// Use the reduce method to calculate product of all numbers in the array.
let Factorial = arr3.reduce((perv, curr)=>{
    return perv * curr;
})
console.log("Factorial:",Factorial);
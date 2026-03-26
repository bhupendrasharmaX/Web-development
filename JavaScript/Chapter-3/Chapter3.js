// Loops and String

// Loops (For loop)
for(let i = 1; i<=5; i++){
    console.log("Bhupendra sharma")
} 

// Loop for calculating sum of '100' numbers
let sum = 0;
let n = 100;
for (let i = 1; i <= n; i++){
    sum = sum + i;
}
console.log("The sum of first 100 number is:",sum);


// while loop
let a = 1;
while(a<=5){
    console.log("a = ",a);
    a++;
}


// do-while loop
let b = 1
do{
    console.log('Hey');
    b++;
}while(b<=5);


// for-of loop
let str = "Bhupendra"
let size = 0;
for(let val of str){
    console.log(val);
    size++;
}
console.log("The lenth of the string is:",size);

// for-in loop
let student = {
    name:"Bhupendra",
    enrollement_number: 54,
    age:19,
}
for(let key in student){
    console.log(key,":",student[key]);
}

// Strings
str = "BhupendraSharma";
console.log("The string is:",str);

// Length of the string
console.log("The length of the string is:",str.length);

// Indexing of the string
console.log("Element of the above string at indexing 0 is:",str[0]);

// Template Literals
let specialString = `Hey, my name is Bhupendra sharma`;
console.log(specialString);

let obj = {
    name1:"Rahul",
    enrollement_number1: 54,
}
let output = `The name of the student is ${obj.name1} and enrollment number is ${obj.enrollement_number1}`;
console.log(output); 

name3 = `Bhupendra\nsharma`
console.log(`The name is ${name3} and the length is ${name3.length} because i use an escape character between name and surname\n`);

// String Methds

// 1. str.toUpperCase()
let str1 = "BhupendraSharma";
console.log("\nBefore using upper case:",str1);
console.log("After using upper case:",str1.toUpperCase());

// 2.str.toLowerCase()
console.log("\nBefore using lower case:",str1);
console.log("After using lower case:",str1.toLowerCase());


// 3. str.trim()
let str2 = "     Nothing     ";
console.log("String before using trim method:",str2);
console.log("String After using trim method:",str2.trim());

// 4. str.slice(start,end)
let str3 = "0123456";
str3 = str3.slice(1,3);
console.log(str3);

// 5. str1.concat(str2)
result = str1.concat(str3);
console.log(result);

// 6. str.replace(serachVal,newVal)
 result1 = str1.replaceAll("Bhu","U");
 console.log(result1);

// 7. str.charAt(indexing)
console.log("Element in string1 at indxing (1) is:",str1.charAt(1));
// Q1.
let marks = [89,87,88,66,56];
let sum = 0;
console.log("---Marks of the student:---");
for(let i = 0; i<marks.length;i++){
    console.log(marks[i]);
    sum = sum + marks[i];
}
console.log("Total marks of the student:",sum);
console.log("The average of the marks:",sum/5);

// Q2.
console.log("\n---Before applying 10% off offer the price will be:---");
let price = [250,645,300,900,50];
let off;
for(let i = 0; i<price.length;i++){
    console.log(price[i]);
}

console.log("---Price after applying 10% off offer---"); 
for(let i = 0; i<price.length;i++){
    off =  price[i] - (price[i]*0.1);
    console.log(off);
}

// Q3.
let companies = ["Bloomberg","Microsoft","Uber","Google","IBM","Netflix"];
// console.log("Deleted Company:",companies.shift());
companies.splice(2,1,"Ola");
console.log(companies);

companies.push("Amazon");
console.log(companies);

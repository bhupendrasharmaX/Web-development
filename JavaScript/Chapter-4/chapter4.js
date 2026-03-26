let marks = [56,88,54,78,97];
marks[0] = 90; // We can change the value of marks in the array.
console.log(marks);
for(let index = 0; index<marks.length; index++){
    console.log(marks[index]);
}

// Methods of array:
let fruits = ["Banana","Apple","Orange","Litchi","Chiku"];
fruits.push("Mango"); // It adds the new item at the end of the array.
console.log(fruits);

fruits.pop(); //It delet the end item of the array.
console.log(fruits);


console.log(fruits.toString()); // It converts the array in the string.

let join = marks.concat(fruits); // It is used of join two and more array.
console.log(join);

let add = fruits.unshift("asdd"); // It is used to add items in the starting og the array.
console.log(add);

console.log(fruits.slice(1,3)); // it will starts with 'banana' and 'apple' at end because in above line we add 'asdd' in the starting

console.log(fruits.splice(2,0,11));
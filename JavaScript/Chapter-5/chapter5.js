function sum(a,b){
    // console.log(a+b);
    s = a + b;
    return(s);
}
// sum(2,5)
let sum1 = sum(9,443433);
console.log(sum1);


function msg(msg){
    console.log(msg);
}
msg("Hello world");

const sum2 = ( a, b )=> {
    return a+b;
}
console.log(sum2(25,233));


const multi= (a, b )=> {
    return a*b;
}; 
console.log(multi(45,76));

// forEach loop for arrays

let arr = ["R","a","j"];

arr.forEach((element, idx) => {
    console.log(element);
});

// Map methods for arrays

let num = [65,34,77,235];
num.map((val) =>{
    console.log(val*4);
})

// Filter methods for arrays

let arr1 = [1,4,54,3,5,2,6];
let evenArr = arr1.filter((val)=>{
    return val % 2 == 0;
})
console.log(evenArr);

// Reduce methods for arrays

let arr2 = [1,45,643,3,6,32];
let greater = arr2.reduce((prev,curr)=>{
    return prev > curr ? prev:curr;
})
console.log(greater);
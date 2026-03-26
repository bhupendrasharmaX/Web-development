// Question 1
let num = prompt("Enter the number");
if(num%5==0){
    console.log("The number,",num,"you enter is multiple of 5.");
}else{
    console.log("The number,",num,"you enter is not a multiple of five.");
} 

// Question 2
let marks = prompt("Enter Your marks");
if(marks<100 && marks>=80){
    console.log("You got A-grade in your exam");
}else if(marks<80 && marks>=70){
    console.log("You got B-grade in your exam");
}else if(marks<70 && marks>=60){
    console.log("You got C-grade in your exam");
}else if(marks<60 && marks>=50){
    console.log("You got D-grade in your exam");
}else {
    console.log("You got F-grade in your exam");
}
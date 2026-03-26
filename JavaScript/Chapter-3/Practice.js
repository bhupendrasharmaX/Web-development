// Loops Practice questions

// Q-1. Print all even and odd numbers from (0 to 100).

for(let i = 0; i<=100 ; i++){
    if (i%2 == 0) {
        console.log(i);
    }
}

/* Q-2 .Crete a game where you start with any random game number. Ask the user to keep guessing the game
number until the user enters correct value */

// let gameNum = 25 ;
// let userNum = prompt("Enter your guass number:");
// // console.log(userNum);
// while (userNum != gameNum){
//     prompt("You enter the wrong game number please enter the correct number!");
// }
// console.log("You enter the correct gauss number!");

// String Practice Questions

let Fullname = prompt("Entre your full name:");
let username = `@${Fullname}${Fullname.length}`;
console.log(username);
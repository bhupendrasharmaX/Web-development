/* Q1) Create a new button element. Give it a text "Click me", background color of
red and text color of white */
// Insert the button as the first element inside the body tag.

let insertButton = document.createElement("button");
insertButton.innerText = "Click me!";
console.log(insertButton);
insertButton.style.backgroundColor = "red";
insertButton.style.color = "white";

console.log(document.querySelector("body").prepend(insertButton));

/* Q2) Create a <p> tag in html, give it a class and some styling.
Now create a new class in CSS and try to append this class to the <p> element.
Solve the problem using "classlist" */

let para = document.querySelector("p");
console.log(para);
para.classList.add("newParagraph");
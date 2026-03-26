// Selecting with id
let heading = document.getElementById("heading");
console.dir(heading);
console.log(heading);

// Selecting with class
let pharagraphs = document.getElementsByClassName("pharas");
console.log("\n");
console.dir(pharagraphs);
console.log(pharagraphs);

// Selection with tag
let botton = document.getElementsByTagName("button");
console.log("\n");
console.dir(botton);
console.log(botton);

// Selection with Query selector

let pharagraphs2 = document.querySelectorAll(".pharas"); // returns all the element
console.dir(pharagraphs2); 

// Question practice 
/* Q1 Create a h2 heading element with text - "Hello JavaScript". Append "From Apna collage students"
    to this text using JS.*/
let heading2 = document.querySelector("h2");
console.dir(heading2);
console.log(heading2.innerText);
heading.innerText = heading2.innerText + " From Apna collage students"

let divs = document.querySelectorAll(".box");
console.dir(divs);
console.log(divs[0]);

let idx = 1;
for (div of divs){
    div.innerText = `Number ${idx} div`
    idx++;
}

let name = document.querySelector("div");
console.log(name.getAttribute("class"));
// console.log(name.setAttribute("class","123"));

let el = document.createElement("button");
el.innerText = "Click me!"
console.log(el);
// let div = document.querySelector("div");
div.before(el);

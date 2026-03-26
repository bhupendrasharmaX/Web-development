let botton1 = document.querySelector("#botton");

botton1.onclick = (evt) =>{
    console.log("Botton is clicked!");
    console.log(evt);
    console.log(evt.type);
    console.log(evt.clientX, evt.clientY);
};

let div = document.querySelector("div");
// div.onmouseover = ()=>{
//     console.log("You are inside the div.");
// };
div.addEventListener("click",()=>{
    console.log("You are in the div1.");
});
div.addEventListener("click",()=>{
    console.log("You are in the div2.");
});
const div3 = () => {
    console.log("You are in the div3.");
};
div.addEventListener("click",div3);

div.addEventListener("click",()=>{
    console.log("You are in the div4.");
});

div.removeEventListener("click",div3);
let boxes = document.querySelectorAll(".box");
let reset = document.querySelector("#reset");
let new_button = document.querySelector("#new");
let message_container = document.querySelector(".message-container");
let message = document.querySelector("#message");




let turnO = true; //playerX, playerO
const winPattens = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6],
];

const resetGame = () =>{
    turnO = true;
    enableBoxes();
    message_container.classList.add("hide");
}

boxes.forEach((box) =>{
    box.addEventListener("click",()=>{
        console.log("Box was clicked");
        if(turnO){
            // For PlayerO
            box.innerText = "O";
            turnO = false;
        }else{
            // For PlayerX
            box.innerText = "X";
            turnO = true;
        }
        box.disabled = true;
        checkWinner();
    });
});

const disableBoxes = () =>{
    for (let box of boxes){
        box.disabled = true;
    }
};
const enableBoxes = () =>{
    for (let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
};

const showWinner = (winner) =>{
    message.innerText = `Congratulations, Winner is ${winner}`;
    message_container.classList.remove("hide");
    disableBoxes();
};


const checkWinner =() =>{
    for(let patten of winPattens){
        let pos1Val = boxes[patten[0]].innerText;
        let pos2Val = boxes[patten[1]].innerText;
        let pos3Val = boxes[patten[2]].innerText;

        if(pos1Val != "" && pos2Val !="" && pos3Val != ""){
            if(pos1Val == pos2Val && pos2Val == pos3Val){
                console.log("Winner",pos1Val);
                showWinner(pos1Val);
            }
        } 
    }
};
new_button.addEventListener("click",resetGame);
reset.addEventListener("click",resetGame);

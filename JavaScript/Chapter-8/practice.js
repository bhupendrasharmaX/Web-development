let mode = document.querySelector("#mode");
let currentMode = "light";

mode.addEventListener("click",() =>{
    // console.log("You change the mode!");
    if(currentMode === "light")
    {
        currentMode = "dark";
        document.querySelector("body").style.backgroundColor = "black";
    }
    else
        {
            currentMode = "light";
            document.querySelector("body").style.backgroundColor = "white";
    }
    console.log(currentMode);
});
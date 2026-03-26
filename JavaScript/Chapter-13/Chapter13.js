const URl = "https://meowfacts.herokuapp.com/";
const para = document.querySelector("#paragraph");
const btu = document.querySelector("#button");

const getFacts = async ()=>{
    console.log("Getting Data....");
    let response = await fetch(URl);
    console.log(response);
    let data = await response.json();
    // console.log(data);
    para.innerText = data.data[0];
};
btu.addEventListener("click",getFacts);
// getFacts();
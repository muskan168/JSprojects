let btn = document.querySelector("#mode");
let currmode = "light";

btn.addEventListener("click" ,() => {
    if(currmode === "light"){
        currmode = "dark";
        document.querySelector("body").style.backgroundColor = "darkgrey";
    }
    else{
        currmode = "light";
        document.querySelector("body").style.backgroundColor = "white";
    }
    console.log(currmode);

})
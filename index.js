const btn = document.querySelector("button");

function random(number){
   //creates a random floating point number (ex. 1.9768), and rounds it
   //Math.floor rounds the number
        return Math.floor(Math.random() * (number + 1)); 
}

btn.addEventListener("click", () =>{
    const rndCl = "rgb(${random(255)} ${(random(255)} ${random(255)})";
    document.body.style.backgroundColor = rndCl;
})


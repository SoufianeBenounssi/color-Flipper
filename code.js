const linear1 = "linear-gradient(248deg, rgba(0, 162, 255, 0.795), rgba(0, 255, 234, 0.712))";
const linear2 = "linear-gradient(248deg, rgba(53, 73, 255, 0.795), rgba(123, 66, 255, 0.712))";
const linear3 = "linear-gradient(248deg, rgba(0, 255, 255, 0.795), rgba(0, 255, 157, 0.712))";

const colors  = [linear1, linear2, linear3];
const btn = document.getElementById("btn")

btn.addEventListener("click", function(){
    const randomNumber = getRandomNumber();
    document.body.style.backgroundImage = colors[randomNumber];
    document.li.style.backgroundImage = colors[randomNumber];
})

function getRandomNumber(){
    return Math.floor(Math.random() * colors.length);
}
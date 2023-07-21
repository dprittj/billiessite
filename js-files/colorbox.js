const hex = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const btnColor = document.getElementById("btnColor");
const div3 = document.getElementById("div3");

btnColor.addEventListener('click', function(){
    let hexColor = "#";

    for (let i = 0; i < 6; i++){
        hexColor +=hex[getRandomNumber()];
    }

    div3.style.backgroundColor = hexColor;
})

function getRandomNumber(){
    return Math.floor(Math.random()*hex.length);
};


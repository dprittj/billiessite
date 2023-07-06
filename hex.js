const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
// #f15025, hex colors require six values followed by a hash sign!

const btn = document.getElementById('btn');
const color = document.querySelector(".color");

btn.addEventListener('click', function(){
// hex colors begin with hash sign, thus the hex variable will start by being assigned a hash sign
let hexColor = '#';
// loop must cycle 6 times to generate hex value
for (let i = 0; i < 6; i++){
    hexColor += hex[getRandomNumber()]
    }
color.textContent = hexColor;
document.body.style.backgroundColor = hexColor;
})


function getRandomNumber(){
    return Math.floor(Math.random()*hex.length);
};

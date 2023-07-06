const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const btn = document.getElementById('btn');
const color = document.querySelector(".color");

btn.addEventListener('click', function(){
    // test output:
    // console.log(document.body);

    // output v1.0:
    const randomNumber = getRandomNumber();
    console.log(randomNumber);
        // goal: get random number between 0-3
    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];

})

// generates random number
function getRandomNumber(){
    return Math.floor(Math.random() * colors.length);
}


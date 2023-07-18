
const btn = document.getElementById("declaredHello");

function declaredHello(){
    
    const newP = document.createElement("p");
    
    const returnHello = document.createTextNode("Hello World");
    
    newP.appendChild(returnHello);
    
    // const btnGreet = document.getElementById("declaredHello");

    document.body.insertBefore(newP, h1);
}

btn.addEventListener('click', function(){

    const div1 = document.getElementById("div1");
    document.body.removeChild(div1, btn);

    return declaredHello();
});

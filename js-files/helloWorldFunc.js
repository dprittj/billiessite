
const btn = document.getElementById("declaredHello");

function declaredHello(){
    
    const newP = document.createElement("p");
    
    const returnHello = document.createTextNode("Hello World");
    
    newP.appendChild(returnHello);
    
    // const btnGreet = document.getElementById("declaredHello");
    const div2 = document.getElementById("div2");

    document.body.insertBefore(newP, div2);
    // document.body.insertAfter(newP, div2);
}

btn.addEventListener('click', function(){

    const div2 = document.getElementById("div2");
    btn.remove();

    return declaredHello();
});

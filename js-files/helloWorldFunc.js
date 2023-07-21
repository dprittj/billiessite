
const btn = document.getElementById("declaredHello");


function declaredHello(){
    // this block creates a new <p> element and adds text to it
    const newP = document.createElement("p");
    const returnHello = document.createTextNode("Hello World");
    newP.appendChild(returnHello);
    
    // the new <p> is put onto the DOM above the IDed element
    const div2 = document.getElementById("div2");
    document.body.insertBefore(newP, div2);

    /* originally, placed immediately after the element creation above (to no avail), 
    down here, these lines attach the class="newP" to the new <p> element */
    const newPclass = document.createAttribute("class");
    newPclass.value = "newP";
    const P = document.getElementsByTagName("p")[0];
    P.setAttributeNode(newPclass);
}


// on clicking the button, a greeting appears and the button disappears
btn.addEventListener('click', function(){

    const div2 = document.getElementById("div2");
    btn.remove();

    return declaredHello();
});

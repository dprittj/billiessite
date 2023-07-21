

// parsing general functions out to call, from the helloWorldFunc template of adding elements
function newElement(element){
    return document.createElement(element.toString);
}

function addTextToElement(text){
    return document.createTextNode(text.toString);
}

let addTextElement = function(element) {
    newElement = document.createElement(element.toString);
    return function (){
        newElement.appendChild(addTextElementToElement());
    };
}

// function insertElementIntoDOM(){ }

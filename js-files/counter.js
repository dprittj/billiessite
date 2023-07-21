
const btnCount = document.getElementById("btnCount");

function countValue(num){
    num = 2;
    firstValue = num-1;
    newNum = firstValue++;
    return `Is this -->> ${newNum} <<-- your number??`
    
}

function showCount(){
    const newSection = document.createElement("section");
    const newText = document.createTextNode(countValue());
    newSection.appendChild(newText);
    document.body.insertBefore(newSection, div4);
}

btnCount.addEventListener('click', function(){
    return showCount();
});

document.getElementById('changeTextButton').addEventListener('click',function(){
    
    let paragraph=document.getElementById('myParagraph')
    paragraph.textContent="The para just changed "


})

// example-2

document.getElementById('highlightFirstCity').addEventListener('click', function(){
    let firstList=document.getElementsByTagName('li');
    //how to inject class to an element 
    firstList[0].classList.add("highlight");

})

// example-3

document.getElementById("changeOrder").addEventListener('click',function(){
    let Order=document.getElementById('coffeeType');
    Order.textContent="Expresso";
    Order.style.backgroundColor="brown";


})

//example-4 how to create element on certain event 

document.getElementById("addNewItem").addEventListener('click',function(){
//    let newItem= document.createElement('li')
//    newItem.textContent="Eggs";
let tasklist=document.getElementById('tasklist');
    tasklist.lastElementChild.remove();
    
    

})








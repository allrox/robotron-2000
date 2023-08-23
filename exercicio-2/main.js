// Creating a constant for the message's recipient
const result_box = document.querySelector('.result_box');
// Set field as hidden on load
result_box.style.display="none";

// Creating a constant for the message trigger
const sendMessage = document.querySelector('#clickhere')
// Adding listener for the 'click' event
sendMessage.addEventListener('click', send)

// Creating a constant for the reset trigger
const clearMessage = document.querySelector('#reset')
// Adding listener for the 'click' event
clearMessage.addEventListener('click', clear)


// This function throws a console message, 
// set the message box as visible and shows a message on HTML
function send(){
    console.log("Element clicked!");
    result_box.style.display='';
    document.querySelector('.result_box').innerHTML="It works! Element clicked!";
}

// This function throws a console message and set the message box as hidden
function clear(){
    console.log("Clear message sent.")
    result_box.style.display = "none";
}

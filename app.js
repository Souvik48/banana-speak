/**ex02-use of prompt and alert  **/
// var userName = prompt("Tell me your name");

// var userMessage = "This script works!! " + userName;

// alert(userMessage);


/**ex03-use button and onClick event handler **/
var btnTranslate = document.querySelector("#btn-translate");

var txtInput = document.querySelector("#txt-input");



btnTranslate.addEventListener("click",function clickEventHandler(){
    console.log("Clicked!");
    console.log("input",txtInput.value)
})



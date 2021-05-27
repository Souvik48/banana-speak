/**ex02-use of prompt and alert  **/
// var userName = prompt("Tell me your name");

// var userMessage = "This script works!! " + userName;

// alert(userMessage);


/**ex03-use button and onClick event handler **/
var btnTranslate = document.querySelector("#btn-translate");

var txtInput = document.querySelector("#txt-input");

var outputDiv = document.querySelector("#output");

//outputDiv.innerText = "Souvik Das" 
//if you want to write value then use id.innerText

//if you want to read value then use id.value

btnTranslate.addEventListener("click",function clickEventHandler(){
    //console.log("Clicked!");
   //    console.log("input",txtInput.value)
   outputDiv.innerText = "sdsaddaa " + txtInput.value 

})



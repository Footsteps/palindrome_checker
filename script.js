const checkButton = document.getElementById("check-btn");
const textInput = document.getElementById("text-input");

//event listeners
checkButton.addEventListener("click", () => {
    const inputValue = textInput.value;
    //alert if there is no input
    if(inputValue.value == "") {
        alert("Please input a value");
    } 
    
  });
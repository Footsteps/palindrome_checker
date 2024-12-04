const checkButton = document.getElementById("check-btn");
const textInput = document.getElementById("text-input");
const result = document.getElementById("result");

//event listener
checkButton.addEventListener("click", () => {
    const inputValue = textInput.value;
    //alert if there is no input
    if(inputValue === "") {
        alert("Please input a value");
        return;
    } else {
        checkIfPalindrome(inputValue);
        textInput.value = "";
    }  
  });

  const checkIfPalindrome = (inputValue) => {
    //remove non alphanumerical characters & toLowerCase
    const cleanInput = inputValue.replace(/[^A-Za-z0-9]/gi, "").toLowerCase();
    //reverse input
    const reversedInput = cleanInput.split("").reverse().join("");
    const resultMsg = `${inputValue} ${
    cleanInput == reversedInput ? `is` : `is not` 
    } a palindrome.`
    result.innerText = resultMsg;
}
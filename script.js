const checkButton = document.getElementById("check-btn");
const result = document.getElementById("result");
const input = document.getElementById("text-input");

//add event listener
checkButton.addEventListener("click", () => {
    const inputValue = input.value;
    if (inputValue == "") {
        alert("Please input a value");
        return;    
    } else {
        checkForPalindrome(inputValue);
        inputValue = "";
    }
});

const checkForPalindrome = (input) =>  {
    const originalValue = input;
    //remove non alphanumerical characters, spaces, and lowercase
    const cleanedInput = originalValue.replace(/[^A-Za-z0-9]/gi, "").toLowerCase();
    //reverse input
    const reversedInput = cleanedInput.split("").reverse().join("");
    //check if something is a palindrome / result message
    const resultMsg = `${originalValue} ${
        cleanedInput == reversedInput ? 'is' : 'is not'
    } a palindrome`
    
    result.innerText = resultMsg;
}
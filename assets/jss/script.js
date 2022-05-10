// Assignment Code
// var generateBtn = document.querySelector("#generate");

// Write password to the #password input

// function writePassword() {
//     var password = generatePassword();
//     var passwordText = document.querySelector("#password");

//     passwordText.value = password;
    
// }


// const generatePassword = (length, characters) => {
//     let password = "";
//     for (let i = 0; i < length; i++) {
//     password += characters.charAt(
//       Math.floor(Math.random() * characters.length)
//     );
//     }
//     return password;
// };






// // Add event listener to generate button

// generateBtn.addEventListener("click", writePassword (Event) {
//     alert("Yeggings")
// });

// var pressedButton = document.getElementsByTagName("button")[0];
//    pressedButton.addEventListener("click", function (event) {
//       alert("You have pressed the button..........")
//    })

var alphaLower = "abcdefghijklmnopqrstuvwxyz";
var alphaUpper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var alphaAll = alphaLower + alphaUpper;
var numbers = "0123456789";
var symbols = "!@#$%^&*_-+=";


var passwordText = document.querySelector("#password");
var passwordLength = document.getElementById("length");
var mustHaveAlphaLower = document.getElementById("alphaLower");
var mustHaveAlphaUpper = document.getElementById("alphaUpper");
var mustHaveNumbers = document.getElementById("numbers");
var mustHaveSymbols = document.getElementById("symbols");
var generateBtn = document.querySelector(".btn");


// generateBtn.addEventListener("click", function(){ 
// var characters = null
// if 
// });
//     var characters = null

// generateBtn.addEventListener("click", () => {
//     var characters = ""
//     mustHaveAlphaLower.checked ? (characters += alphaLower) : "";
//     mustHaveAlphaUpper.checked ? (characters += alphaUpper) : "";
//     mustHaveNumbers.checked ? (characters += numbers) : "";
//     mustHaveSymbols.checked ? (characters += symbols) : "";
//     passwordText.value = generatePassword(length.value, characters);
// });

generateBtn.addEventListener("click", () => {
  let characters = alphaAll;
  mustHaveNumbers.checked ? (characters += numbers) : "";
  mustHaveSymbols.checked ? (characters += symbols) : "";
  passwordText.value = generatePassword(length.value, characters);
});

const generatePassword = (length, characters) => {
    let password = "";
    for (let i = 0; i < length; i++) {
    password += characters.charAt(
      Math.floor(Math.random() * characters.length)
    );
    }
    return password;

};   

console.log("hello");


// const copyBtn = document.getElementById("copy");
// copyBtn.addEventListener("click", () => {
//     passwordTxt.select();
//     document.execCommand("copy");
//     alert("Password Copied");
// });

//pulled and changed code from a project website

// Create arrays for the different password characters. I was inspired to use this strategy by this tutorial: 
https://www.youtube.com/watch?v=iKo9pDKKHnc&t=176s

var lengthInput = 8;
var lcInput = [];
var ucInput = [];
var numInput = [];
var scInput = [];

var lcCharCodes = arrayLowToHigh(65, 90)
var upCharCodes = arrayLowToHigh(97, 122)
var numCharCodes = arrayLowToHigh(48-57)
var scCharCodes = arrayLowToHigh(33,47).concat(arrayLowToHigh(58-64).concat(arrayLowToHigh(91, 96).concat(arrayLowToHigh(123, 126)))

// Assignment Code
// Create button for password selector
var generateBtn = document.querySelector("#generate");

// For initial pseudo-code, I was inspired by this youtube video where an instructor shows how the prompts look and how to get started: https://www.youtube.com/watch?v=x4HUaiazDes&list=WL&index=4&t=471s

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// Display/Write password to the #password input
function writePassword() {
  var promptInputs = getPrompts();
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Do I need to add this somewhere?  e.preventDefault();

// I was inspired by this tutorial to understand how to generate a randomized password: https://www.youtube.com/watch?v=v2jfGo7ztm8&list=WL&index=3

Function: generatePassword();

// function generatePassword(lengthInput, lcInput, upInput, numInput, scInput) {
//   let (lcInput) = lcCharCodes
//   if (ucInput) charCodes = charCodes.concat (upCharCodes)
//   if (scInput) charCodes = charCodes.concat (scCharCodes)
//   if (numInput) charCodes = charCodes.concat (numCharCodes)
  
//   for (let i = 0; i + lengthInput; i++) {
//     var charCode= charCodes[Math.floor(Math.random() * charCodes.length)]
//     passwordCharacters.push(String.fromCharCode(charCodes))
//     }
  
//   return passwordCharacters.join('')
// }

// function arrayLowToHigh(low, high){
//   var array = []
//   for (let i = low; i <=high; i++) {
//       array.push(i)
//   }
//   return array
// }



// Prompt: length, at least 8 to 128 characters
//open prompt window with text
function getPrompts(){
  lengthInput = +(window.prompt ("Choose length of password (8 to 128 characters"));

}

// Function --use this number to set password length
// length is the number of characters allowed in the password
// let passwordLength = lengthInput;
// let password = '';

var lengthInput = (window.prompt ("Choose length of password (8 to 128 characters"));

// Prompt: character types, lowercase, uppercase, numeric, and/or special characters
var lcInput = (window.prompt ("Include lowercase letters?"));

var ucInput = (window.prompt ("Include uppercase letters?")); 

var numInput =(window.prompt ("Include numbers?"));

var scInput =(window.prompt ("Include special characters?"));





// At least one character type selected
// if ... proceed
// else (!userChoice) {
//   return;
// }


// generate password
// Form.addEventListener('sumbit', e => {
 
//    password =generatePassword(length, lcInput, upInput, numInput, scInput)

// })

// e.preventDefault();


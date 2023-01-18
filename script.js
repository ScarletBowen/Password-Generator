// Create arrays for the different characters using ASCII character codes. I was inspired to use this strategy by this tutorial: 
https://www.youtube.com/watch?v=iKo9pDKKHnc&t=176s

var inputAmount = 8;
var inputChar = [];

var lcCharCodes = arrayLowToHigh(65, 90)
var ucCharCodes = arrayLowToHigh(97, 122)
var numCharCodes = arrayLowToHigh(48, 57)
var scCharCodes = arrayLowToHigh(33, 47).concat(arrayLowToHigh(58, 64).concat(arrayLowToHigh(91, 96).concat(arrayLowToHigh(123, 126))))

// Assignment Code
// Create button for password selector
var generateBtn = document.querySelector("#generate");

// For initial pseudo-code, I was inspired by this youtube video where an instructor shows how the prompts look and how to get started: https://www.youtube.com/watch?v=x4HUaiazDes&list=WL&index=4&t=471s

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


// Display/Write password to the #password input 
// call function to start prompts with getInput
// call function to generate password
function writePassword() {
  includeInput();
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.textContent = password;

}

// Do I need to add this somewhere?  e.preventDefault();

// I was inspired by this tutorial to understand how to generate a randomized password: https://www.youtube.com/watch?v=v2jfGo7ztm8&list=WL&index=3

// problems to solve--password length is not working; also character codes need to be made into a string
function generatePassword () {
  var password = [];
  for (let i = 0; i < inputAmount; i++) {
    var randomChar = inputChar[Math.floor(Math.random() * inputChar.length)]
    console.log(String.fromCharCode(randomChar), inputChar, Math.floor(Math.random() * inputChar))
    password.push(String.fromCharCode(randomChar))

    console.log("array with all password criteria")

    // = password + inputChar[randomChar];

  }
console.log(password.join(''))
  return password.join('')
  
} 

// function to organize arrays from low to high
function arrayLowToHigh(low, high){
  var array = []
  for (let i = low; i <=high; i++) {
      array.push(i)
  }
  return array
}


// Prompt user to enter length, at least 8 to 128 characters
//open prompt window with text

function includeInput(){
  inputChar = [];

  inputAmount = parseInt(window.prompt ("Choose length of password (8 to 128 characters)"));

// Prompt: character types, lowercase, uppercase, numeric, and/or special characters
  if (confirm("Include lowercase letters?")) {
    inputChar = inputChar.concat(lcCharCodes);
  }

  if (confirm("Include uppercase letters?")) {
    inputChar = inputChar.concat(ucCharCodes);
  }

  if (confirm("Include numbers?")) {
    inputChar = inputChar.concat(numCharCodes);
  }

  if (confirm("Include special characters?")) {
    inputChar = inputChar.concat(scCharCodes);
  }
  return true
}
 


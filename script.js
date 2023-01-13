// Assignment Code
var generateBtn = document.querySelector("#generate");

// Prompt: length, at least 8 characters
// Prompt: character types, lowercase, uppercase, numeric, and/or special characters
// At least one character type selected
// generate password


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

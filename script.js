// Assignment Code
// Create button for password selector
var generateBtn = document.querySelector("#generate");
// For pseude-code, I was inspired by this youtube video where an instructor shows how the prompts look and how to get started: https://www.youtube.com/watch?v=x4HUaiazDes&list=WL&index=4&t=471s


// Prompt: length, at least 8 to 128 characters
//open prompt window with text
lengthInput = Number(window.prompt ("Choose length of password between 8 and 12 characters", ""));

// Function --use this number to set password length
// length is the number of characters allowed in the password
lengthInput = .length{Number}

// Prompt: character types, lowercase, uppercase, numeric, and/or special characters
lcInput = (window.prompt ("Do you want to use lowercase letters? yes or no?", ""));
  if 
  else

ucInput = (window.prompt ("Do you want to use uppercase letters? yes or no?", ""));
  if 
  else

numInput =(window.prompt ("Do you want to use numbers? yes or no?", ""));
  if
  else

scInput =(window.prompt ("Do you want to use special characters? yes or no?", ""));

// At least one character type selected
// if ... proceed
else (!userChoice) {
  return;
}


// generate password

// Display Password
function generatePassword() {
  return "password will go here";
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

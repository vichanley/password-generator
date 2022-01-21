// Assignment code here

//Prompting user to choose length of password 
var passwordLength = prompt("Please enter a password length of at least 8 characters and no more than 128 characters.: ");

if (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)) {
  return generatePassword();
}

else {
  prompt("Please enter a password length of at least 8 characters and no more than 128 characters.: ");
}

//Prompting user to choose character types to include in password 
var lowerChars = confirm("Would you like to include lowercase characters in your password?");

if (!lowerChars) {
  lowerChars = "";
}

else {
  lowerChars = "abcdefghijklmnopqrstuvwxyz";
}

var upperChars = confirm("Would you like to include uppercase characters in your password?");

if (!upperChars) {
  upperChars = "";
}

else {
  upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
}

var specialChars = confirm("Would you like to include special characters in your password?");

if (!specialChars) {
  specialChars = "";
}

else {
  specialChars = "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
}

var numericValues = confirm("Would you like to include numeric values in your password?");

if (!numericValues) {
  numericValues = "";
}

else {
  numericValues = "0123456789";
}





// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Assignment code here

//Prompting user to choose length of password 
var passwordLength = prompt("Please enter a password length of at least 8 characters and no more than 128 characters.: ");

if (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)) {
  return generatePassword();
}

else {
  prompt("Please enter a password length of at least 8 characters and no more than 128 characters.: ")
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

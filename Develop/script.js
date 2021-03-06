// Assignment code here
var passwordCriteria = function () {

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


  //Input validated and ensuring that at least one character type should be selected 
  var userInput = lowerChars + upperChars + specialChars + numericValues;

  if (userInput.length > 0) {
    console.log ("User input is " + userInput);
    return userInput;
  }

  else {
    window.alert("Please select at least one type of character to include in your password.");
    return passwordCriteria();
  }

}

//Generating final password with criteria set 
var generatePassword = function(){

  var passwordLength = prompt("Please enter a length of at least 8 characters and no more than 128 characters for your password:");

  if (isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128 ){
    return generatePassword();
  }

  var setCriteria = passwordCriteria();
  var finalPassword = "";

  for (var i = 0, n = setCriteria.length; i < passwordLength; i++) {
    finalPassword += setCriteria[Math.floor(Math.random() * n)];
  }

  return finalPassword;
}

//Get references to the #generate element
var generateBtn = document.querySelector("#generate");

//Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

//Add event listener to generate button 
generateBtn.addEventListener("click", writePassword);
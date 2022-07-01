// Assignment Code
var generateBtn = document.querySelector("#generate");

var alphaUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var alphaLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numeric = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var specialCharacters = [" ", "!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~"];

var promptUser = function(){
  //this function is designed to be called inside the generatePassword function to prompt users

    var passwordLength = window.prompt("Please select a password length between 8 and 128");
    //if password is less than 8, prompt user to try again. If password is more than 128, prompt user to try again.
    passwordLength = parseInt(passwordLength)
    
    
    while (!passwordLength || passwordLength < 8 || passwordLength > 128){
      window.alert("Password length MUST be between 8 and 128 characters. Try again.")
      return this.promptUser();
    }

    var passwordUpperCase = window.prompt("Would you like to include uppercase characters?");
    if(passwordUpperCase){
      let passwordUpperCase = Math.floor(Math.random * alphaUpper.length);
    }
    
  
    var passwordLowerCase = window.prompt("Would you like to include lowercase characters?");
  
    var passwordNumbers = window.prompt("Would you like to include numbers?")
  
    var specialCharacters = window.prompt("Would you like to include special characters?")
  };
// Write password to the #password input
function writePassword() {
  
  var generatePassword = function(){
    /*Prompt user with series of window.prompt's for pw criteria when generate pw button is clicked. The order of prompts goes as followed:
      Ask for:
      1. Length of pw(8-128 characters)
      2. Ask if user wants uppercase
      3. Ask if suer wants lowercase
      4. Ask if user wants numeric and/or special char
    When all prompts are answered, show user the generated PW in the text box using user-selected characters from criteria.
      */
     promptUser();
    return "generated pw will go here"
  }
  };
      promptUser();
  
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
// Assignment Code
// List of acceptable special characters
const specialChars = " !\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
// List of acceptable uppercase and lowercase characters
const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const lowercaseChars = uppercaseChars.toLowerCase();

// Variable to hold the users input
let passwordLength = 0;
let containsLowercase = false;
let containsUppercase = false;
let containsNumbers = false;
let containsSpecial = false;

// Reference the generate password button
var generateBtn = document.querySelector("#generate");

// Function used to generate a random number between 0 and the specified number-1
function getRandom(num) {
    return Math.floor(Math.random() * num);
}

function writePassword()

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

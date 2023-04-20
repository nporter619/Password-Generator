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

function writePassword() {
    // Let's us know if there was an error
    let invalid = false;

    // userInput will contain the input from the user as a string
    let userInput = prompt('Please enter a password length between 8 and 128');

    // User clicked cancel
    if (userInput === null) {
        return;
    }

    // Convert the user input to a number
    userInput = Number(userInput);

    // If not a number or input is less than 8 or greater than 128, set invalid to true
    if (isNaN(userInput)) {
        invalid = true;

    } else if (userInput < 8) {
        invalid = true;

    } else if (userInput > 128) {
        invalid = true;
    }

    // If invalid is true, show error...
    if (invalid) {
        // exit and show the error message
        alert('Please enter a valid number between 8 and 128.');

        // Ask again
        writePassword();
        return;
    }

    // Set the passwordLength
    passwordLength = userInput;

    // Password length is valid, let's ask for password types...

    // Ask if password should contain uppercase
    if (confirm('Should your password contain uppercase characters?')) {
        containsUppercase = true;
    }

    // Ask if password should contain lowercase
    if (confirm('Should your password contain lowercase characters?')) {
        containsLowercase = true;
    }

    // Ask if password should contain numeric characters
    if (confirm('Should your password contain numeric characters?')) {
        containsNumbers = true;
    }

    // Ask if password should contain special characters
    if (confirm('Should your password contain special characters?')) {
        containsSpecial = true;
    }

    // Final validation, at least 1 type must be true
    if (containsUppercase === false) {
        if (containsLowercase === false) {
            if (containsNumbers === false) {
                if (containsSpecial === false) {
                    alert('Please select at least 1 password criteria type');
                    writePassword()
                    return;
                }
            }
        }
    }

    let password = '';
    // Success! Let's generate the password
    while (password.length <= passwordLength) {
        if (containsUppercase === true) {
            // Generate a random character from the uppercase chars
            password += uppercaseChars.charAt(getRandom(uppercaseChars.length));

        }
        if (containsLowercase === true) {
            // Generate a random character from the lowercase chars
            password += lowercaseChars.charAt(getRandom(lowercaseChars.length));

        }
        if (containsNumbers === true) {
            // Generate a random number between 0 and 9
            password += getRandom(10);

        }
        if (containsSpecial === true) {
            // Generate a random character from the special chars
            password += specialChars.charAt(getRandom(specialChars.length));
        }
    }

    document.querySelector('#password').innerText=password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
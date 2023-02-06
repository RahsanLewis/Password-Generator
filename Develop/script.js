// defining the set of characters that can be used
let characterSet = {};

characterSet.lowerCase = "abcdefghijklmnopqrstuvwxyz";
characterSet.upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
characterSet.numbers = "0123456789";
characterSet.symbols = "!@#$%^&*()_+-=[]{}|;':,.<>/?";

// Function to create the password
function generatePassword() {

    var password = "";
    var passwordText = "";

    // choose a password length
    var length = parseInt(prompt("Enter the password length (minimum 8, maximum 128 characters):"));

    if (length < 8 || length > 128) {
        prompt("Your password must be at least 8 characters and no more than 128 characters.");
    }
    // ask the user what types of characters should be used
    else {
        var lowerCase = confirm("Should your password have lowercase letters?");
        if (lowerCase) {
            passwordText = passwordText + characterSet.lowerCase;
        };
        var upperCase = confirm("Should your password have uppercase letters?");
        if (upperCase) {
            passwordText = passwordText + characterSet.upperCase;
        };
        var numbers = confirm("Should your password have numbers?");
        if (numbers) {
            passwordText = passwordText + characterSet.numbers;
        };
        var symbols = confirm("Should your password have special characters?");
        if (symbols) {
            passwordText = passwordText + characterSet.symbols;
        };

        for (var i = 0; i < length; i++) {
            password += passwordText[Math.floor(Math.random() * passwordText.length)];
        }
        return password;
    }
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
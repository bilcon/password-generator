
// User input variables: 
var enter;
var confirmLowercase;
var confirmUppercase;
var confirmNumber;
var confirmCharacter;

// Starting Password variable values: 
// Lowercase characters
alpha = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
// Uppercase characters
alphaUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
// Numeric characters
number = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// Special characters 
character = ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "<", "=", ">", "?", "@", "[", "]", " ^ ", "_", "`", "{", "|", "}", "~"];

var get = document.querySelector("#generate");

get.addEventListener("click", function () {
    ps = generatePassword();
    document.getElementById("password").placeholder = ps;
});

// Starts generating password function
function generatePassword() {
    // Asks for input how many characters
    enter = parseInt(prompt("How many characters do you want in your password?\n\nEnter a number between 8 and 128\n"));
    // First if statement for user validation 
    if (!enter) {
        alert("You must enter an actual number between 8 and 128");
    } else if (enter < 8 || enter > 128) {
    // Validates user input

        enter = parseInt(prompt("You must enter an actual number between 8 and 128"));

    } else {
    // Continues once user input is validated
    // Start user input prompts

        confirmLowercase = confirm("Do you want to use Lowercase letters?\n\nSelect OK for YES or Cancel for NO");
        confirmUppercase = confirm("Do you want to use Uppercase letters?\n\nSelect OK for YES or Cancel for NO");
        confirmNumber = confirm("Do you want to use a number?\n\nSelect OK for YES or Cancel for NO");
        confirmCharacter = confirm("Do you want to use special characters?\n\nSelect OK for YES or Cancel for NO");
    };
// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

// Function to ask for password options
function getPasswordOptions(a) {
  var ask = confirm("Do you want " + a + " characters in your password?");
  if (ask === true) {
    return true;
  } else {
    return false;
  }
}

// Function for getting a random element from an array

function getRandom(a) {
  return a[Math.floor(Math.random() * a.length)];
}



// Function to generate password with user input



function generatePassword() {
  var special = "";
  var numeric = "";
  var lowerCased = "";
  var upperCased = "";
  var userInput = prompt("How long do you want your password to be?");

  if (userInput < 10) {
    alert("Password length too short, it must be at least 10 characters long.")
  } else if (userInput > 64) {
    alert("Password lentgth too long, it must be at most 64 characters long")
  } else {
    if (getPasswordOptions("special") === true) {
      for (var i = 0; i < userInput; i++) {
        special += getRandom(specialCharacters);
      }
    }
    if (getPasswordOptions("numeric") === true) {
      for (var i = 0; i < userInput; i++) {
        numeric += getRandom(numericCharacters);
      }
    }
    if (getPasswordOptions("lower cased") === true) {
      for (var i = 0; i < userInput; i++) {
        lowerCased += getRandom(lowerCasedCharacters);
      }
    }
    if (getPasswordOptions("upper cased") === true) {
      for (var i = 0; i < userInput; i++) {
        upperCased += getRandom(upperCasedCharacters);
      }
    }
  }

  var generatedPassword = special.concat(numeric,lowerCased,upperCased);
  var randomPassword = "";
  for (var i = 0; i < userInput; i++){
    randomPassword += getRandom(generatedPassword)
  }

  return randomPassword;
}




// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);
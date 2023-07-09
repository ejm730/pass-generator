
function generatePassword() {
  // Prompt for the desired password length
  var length = parseInt(prompt("Enter the length of the password (between 8 and 128 characters):"));

  // Validate the password length
  while (isNaN(length) || length < 8 || length > 128) {
    length = parseInt(prompt("Invalid length! Please enter a number between 8 and 128:"));
  }

  // Prompt for character types to include in the password
  var includeLowercase = confirm("Include lowercase characters?");
  var includeUppercase = confirm("Include uppercase characters?");
  var includeNumeric = confirm("Include numeric characters?");
  var includeSpecial = confirm("Include special characters?");

  // Validate that at least one character type is selected
  while (!includeLowercase && !includeUppercase && !includeNumeric && !includeSpecial) {
    alert("You must select at least one character type!");
    includeLowercase = confirm("Include lowercase characters?");
    includeUppercase = confirm("Include uppercase characters?");
    includeNumeric = confirm("Include numeric characters?");
    includeSpecial = confirm("Include special characters?");
  }

  // Define the character sets based on selected character types
  var charset = "";
  if (includeLowercase) {
    charset += "abcdefghijklmnopqrstuvwxyz";
  }
  if (includeUppercase) {
    charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }
  if (includeNumeric) {
    charset += "0123456789";
  }
  if (includeSpecial) {
    charset += "!@#$%^&*()_+~`|}{[]:;?><,./-=";
  }

  // Initialize an empty password string
  var password = "";

  // Generate random characters until the desired password length is reached
  for (var i = 0; i < length; i++) {
    // Generate a random index to select a character from the charset
    var randomIndex = Math.floor(Math.random() * charset.length);

    // Add the selected character to the password string
    password += charset.charAt(randomIndex);
  }

  // Return the generated password
  return password;
}

// Select the "Generate" button from the HTML document
var generateBtn = document.querySelector("#generate");

// Function to write the generated password to the password input field
function writePassword() {
  // Call the generatePassword function to generate a password
  var password = generatePassword();

  // Select the password input field from the HTML document
  var passwordText = document.querySelector("#password");

  // Assigned the generated password to the value of the password input field
  passwordText.value = password;
}

// Added an event listener to the "Generate" button, which calls the writePassword function when clicked
generateBtn.addEventListener("click", writePassword);
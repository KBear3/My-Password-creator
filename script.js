
var generateBtn = document.querySelector("#generate");


function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


generateBtn.addEventListener("click", generatePassword);


var nums = [0,1,2,3,4,5,6,7,8,9];
var lowerLetter = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var upperLetter = ["A","B","C","D","E","F","G","H","I","J","K","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var special = ["!","@","#","$","%","^","&"];
var passwordOptions = []

console.log(nums)
console.log(lowerLetter)
console.log(upperLetter)
console.log(special)


function generatePassword() {
  var passLength = prompt("How many characters would you like?");
  passLength = parseInt(passLength);
  if (passLength > 7 && passLength < 128) {


  var addNumbers = confirm("Do you want numbers in your password?");
      if (addNumbers) {
      passwordOptions = passwordOptions.concat(nums);
      console.log(passwordOptions);
      }

  var addSpecial = confirm("Do you want special characters?");
      if (addSpecial) {
      passwordOptions = passwordOptions.concat(special);
      console.log(passwordOptions);
      }

  var addLowercase = confirm("Do you want lowercase characters?");
      if (addLowercase) {
        passwordOptions = passwordOptions.concat(lowerLetter);
        console.log(passwordOptions);
      }

  var addUppercase = confirm("Do you want uppercase characters?");
      if (addUppercase) {
        passwordOptions = passwordOptions.concat(upperLetter);
        console.log(passwordOptions);
      }
    
      console.log("Your Password options selected are: ");
      console.log(passwordOptions);
      

  var endPassword = "";
    for (var i = 0 ; i < passLength; i++) {
      var randomize = Math.floor(Math.random() * passwordOptions.length);
      endPassword += passwordOptions [randomize] ;
      console.log (endPassword) ;
    }

  console.log(endPassword);
  alert (endPassword)
    
    
  }


else {
      alert( "The number of characters you select must be between 8 and 128!!!");
      passwordText.textcontent = "";
    }

      
  }
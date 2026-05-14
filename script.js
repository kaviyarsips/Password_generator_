const passwordBox =
document.getElementById("password");

const lengthSlider =
document.getElementById("length");

const lengthValue =
document.getElementById("lengthValue");


// Update Length Display

lengthSlider.oninput = () => {

  lengthValue.innerHTML =
  lengthSlider.value;

};


// Generate Password

function generatePassword(){

  const uppercase =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  const lowercase =
  "abcdefghijklmnopqrstuvwxyz";

  const numbers =
  "0123456789";

  const symbols =
  "!@#$%^&*()_+[]{}|;:,.<>?";

  let allChars = "";

  if(document.getElementById("uppercase").checked){

    allChars += uppercase;

  }

  if(document.getElementById("lowercase").checked){

    allChars += lowercase;

  }

  if(document.getElementById("numbers").checked){

    allChars += numbers;

  }

  if(document.getElementById("symbols").checked){

    allChars += symbols;

  }

  if(allChars === ""){

    alert("Select at least one option");

    return;

  }

  let password = "";

  for(let i = 0; i < lengthSlider.value; i++){

    password +=
    allChars.charAt(
      Math.floor(Math.random() * allChars.length)
    );

  }

  passwordBox.value = password;

}


// Copy Password

function copyPassword(){

  passwordBox.select();

  document.execCommand("copy");

  alert("Password Copied!");

}


// Generate Default Password

generatePassword();
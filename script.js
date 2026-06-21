function caesarCipher(text, shift) {

let result = "";

for(let i = 0; i < text.length; i++){

let char = text[i];

if(char >= 'A' && char <= 'Z'){

result += String.fromCharCode(
((char.charCodeAt(0) - 65 + shift + 26) % 26) + 65
);

}
else if(char >= 'a' && char <= 'z'){

result += String.fromCharCode(
((char.charCodeAt(0) - 97 + shift + 26) % 26) + 97
);

}
else{

result += char;

}

}

return result;
}

function encryptText(){

let text =
document.getElementById("inputText").value;

let shift =
parseInt(document.getElementById("shift").value);

if(text.trim() === ""){

alert("Please enter text!");
return;

}

if(isNaN(shift)){

alert("Please enter shift key!");
return;

}

let encrypted =
caesarCipher(text, shift);

document.getElementById(
"encryptedOutput"
).innerText = encrypted;

}

function decryptText(){

let text =
document.getElementById("encryptedOutput").innerText;

let shift =
parseInt(document.getElementById("shift").value);

if(text === "---"){

alert("Encrypt text first!");
return;

}

let decrypted =
caesarCipher(text, -shift);

document.getElementById(
"decryptedOutput"
).innerText = decrypted;

}

function clearAll(){

document.getElementById("inputText").value = "";
document.getElementById("shift").value = "";

document.getElementById(
"encryptedOutput"
).innerText = "---";

document.getElementById(
"decryptedOutput"
).innerText = "---";

}

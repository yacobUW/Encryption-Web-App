const aesEncrypt = require('./encryption/AES_encryption.js');
const aesDecrypt = require('./decryption/AES_decryption.js');

// Get references to the HTML elements
const inputTextElement = document.getElementById('inputText');
const encryptedTextElement = document.getElementById('encryptedText');
const encryptedOutputElement = document.getElementById('encryptedOutput');
const decryptedOutputElement = document.getElementById('decryptedOutput');

// Encryption button click handler
document.getElementById('encryptBtn').addEventListener('click', () => {
  const plaintext = inputTextElement.value;
  const secretKey = 'your_secret_key'; // Replace with your actual AES secret key

  const encryptedText = aesEncrypt(plaintext, secretKey);
  encryptedTextElement.value = encryptedText;
});

// Decryption button click handler
document.getElementById('decryptBtn').addEventListener('click', () => {
  const ciphertext = encryptedTextElement.value;
  const secretKey = 'your_secret_key'; // Replace with your actual AES secret key

  const decryptedText = aesDecrypt(ciphertext, secretKey);
  decryptedOutputElement.textContent = decryptedText;
});

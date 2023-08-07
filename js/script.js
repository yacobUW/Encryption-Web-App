// Get the HTML elements
const inputTextElement = document.getElementById('inputText');
const encryptedTextElement = document.getElementById('encryptedText');
const encryptButton = document.getElementById('encryptButton');
const decryptButton = document.getElementById('decryptButton');
const encryptedOutputElement = document.getElementById('encryptedOutput');
const decryptedOutputElement = document.getElementById('decryptedOutput');

// Handle encryption when the "Encrypt" button is clicked
encryptButton.addEventListener('click', () => {
  const plaintext = inputTextElement.value;
  const encryptedText = aesEncrypt(plaintext, secretKey);
  encryptedTextElement.value = encryptedText;
});

// Handle decryption when the "Decrypt" button is clicked
decryptButton.addEventListener('click', async () => {
  const ciphertext = encryptedTextElement.value;
  const decryptedText = await aesDecrypt(ciphertext, secretKey);
  decryptedOutputElement.textContent = decryptedText;
});

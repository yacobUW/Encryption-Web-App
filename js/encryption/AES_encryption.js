const CryptoJS = require('crypto-js');

// AES Encryption function
function aesEncrypt(plaintext, secretKey) {
  try {
    const ciphertext = CryptoJS.AES.encrypt(plaintext, secretKey).toString();
    return ciphertext;
  } catch (error) {
    console.error('Error during AES encryption:', error.message);
    return null;
  }
}

module.exports = aesEncrypt;


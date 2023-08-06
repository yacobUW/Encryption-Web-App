const CryptoJS = require('crypto-js');

// AES Decryption function
function aesDecrypt(ciphertext, secretKey) {
  try {
    const bytes = CryptoJS.AES.decrypt(ciphertext, secretKey);
    const plaintext = bytes.toString(CryptoJS.enc.Utf8);
    return plaintext;
  } catch (error) {
    console.error('Error during AES decryption:', error.message);
    return null;
  }
}

module.exports = aesDecrypt;


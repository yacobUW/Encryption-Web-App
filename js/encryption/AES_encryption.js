const CryptoJS = require('crypto-js');

// AES Encryption function
async function aesEncrypt(plaintext, secretKey) {
  try {
    const iv = CryptoJS.lib.WordArray.random(16);
    const encrypted = CryptoJS.AES.encrypt(plaintext, secretKey, { iv });
    const ciphertext = iv.concat(encrypted.ciphertext).toString(CryptoJS.enc.Base64);
    return ciphertext;
  } catch (error) {
    console.error('Error during AES encryption:', error.message);
    return null;
  }
}

module.exports = aesEncrypt;

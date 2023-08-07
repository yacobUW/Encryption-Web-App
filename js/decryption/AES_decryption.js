const CryptoJS = require('crypto-js');

// AES Decryption function
async function aesDecrypt(ciphertext, secretKey) {
  try {
    const ciphertextBytes = CryptoJS.enc.Base64.parse(ciphertext);
    const iv = ciphertextBytes.slice(0, 16);
    const encryptedData = ciphertextBytes.slice(16);

    const decrypted = CryptoJS.AES.decrypt({ ciphertext: encryptedData }, secretKey, { iv });
    const plaintext = decrypted.toString(CryptoJS.enc.Utf8);
    return plaintext;
  } catch (error) {
    console.error('Error during AES decryption:', error.message);
    return null;
  }
}

module.exports = aesDecrypt;

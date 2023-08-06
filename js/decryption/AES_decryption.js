// AES Decryption function
async function aesDecrypt(ciphertext, secretKey) {
  try {
    const binaryData = atob(ciphertext);
    const iv = binaryData.slice(0, 16);
    const ciphertextData = binaryData.slice(16);

    const key = await window.crypto.subtle.importKey(
      'raw',
      new TextEncoder().encode(secretKey),
      { name: 'AES-CBC', length: 256 },
      false,
      ['decrypt']
    );

    const decryptedData = await window.crypto.subtle.decrypt(
      { name: 'AES-CBC', iv: new Uint8Array(iv) },
      key,
      new Uint8Array(ciphertextData)
    );

    const decryptedText = new TextDecoder().decode(decryptedData);
    return decryptedText;
  } catch (error) {
    console.error('Error during AES decryption:', error.message);
    return null;
  }
}

export default aesDecrypt;

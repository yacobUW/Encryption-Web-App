// AES Encryption function
async function aesEncrypt(plaintext, secretKey) {
  try {
    const encodedText = new TextEncoder().encode(plaintext);
    const key = await window.crypto.subtle.importKey(
      'raw',
      new TextEncoder().encode(secretKey),
      { name: 'AES-CBC', length: 256 },
      false,
      ['encrypt']
    );

    const iv = window.crypto.getRandomValues(new Uint8Array(16));

    const ciphertext = await window.crypto.subtle.encrypt(
      { name: 'AES-CBC', iv: iv },
      key,
      encodedText
    );

    const encryptedText = btoa(iv + new Uint8Array(ciphertext));
    return encryptedText;
  } catch (error) {
    console.error('Error during AES encryption:', error.message);
    return null;
  }
}

export default aesEncrypt;

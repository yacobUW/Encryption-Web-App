// AES Encryption function
async function aesEncrypt(plaintext, secretKey) {
  try {
    const iv = window.crypto.getRandomValues(new Uint8Array(16));
    const key = await window.crypto.subtle.importKey(
      'raw',
      new TextEncoder().encode(secretKey),
      { name: 'AES-CBC', length: 256 },
      false,
      ['encrypt']
    );

    const encryptedData = await window.crypto.subtle.encrypt(
      { name: 'AES-CBC', iv },
      key,
      new TextEncoder().encode(plaintext)
    );

    const ciphertext = base64Encoding(iv, encryptedData);
    return ciphertext;
  } catch (error) {
    console.error('Error during AES encryption:', error.message);
    return null;
  }
}

function base64Encoding(iv, data) {
  const ivBase64 = btoa(String.fromCharCode.apply(null, iv));
  const dataBase64 = btoa(String.fromCharCode.apply(null, new Uint8Array(data)));
  return ivBase64 + dataBase64;
}

export default aesEncrypt;

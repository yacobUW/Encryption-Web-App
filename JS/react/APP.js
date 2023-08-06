import React, { useState } from 'react';
import aesEncrypt from './path/to/AES_encryption'; // Replace with the correct path to AES_encryption.js
import aesDecrypt from './path/to/AES_decryption'; // Replace with the correct path to AES_decryption.js
import './styles.css';

function App() {
  const [inputText, setInputText] = useState('');
  const [encryptedText, setEncryptedText] = useState('');
  const [decryptedText, setDecryptedText] = useState('');
  const secretKey = '4d27e43f6a0e9c1877e85e19b42aa9f3'; // Replace with your actual AES secret key

  const handleEncryption = () => {
    const ciphertext = aesEncrypt(inputText, secretKey);
    setEncryptedText(ciphertext);
  };

  const handleDecryption = () => {
    const plaintext = aesDecrypt(encryptedText, secretKey);
    setDecryptedText(plaintext);
  };

  return (
    <div className="container">
      <h1>AES Encryption Web App</h1>

      {/* Encryption Form */}
      <div className="form-group">
        <label htmlFor="inputText">Enter text to encrypt:</label>
        <textarea
          id="inputText"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          rows="4"
        ></textarea>
      </div>
      <div className="form-group">
        <button onClick={handleEncryption}>Encrypt</button>
      </div>

      {/* Display Encrypted Text */}
      {encryptedText && (
        <div className="result">
          <strong>Encrypted Text:</strong>
          <div>{encryptedText}</div>
        </div>
      )}

      {/* Decryption Form */}
      <div className="form-group">
        <label htmlFor="encryptedText">Enter encrypted text to decrypt:</label>
        <textarea
          id="encryptedText"
          value={encryptedText}
          onChange={(e) => setEncryptedText(e.target.value)}
          rows="4"
        ></textarea>
      </div>
      <div className="form-group">
        <button onClick={handleDecryption}>Decrypt</button>
      </div>

      {/* Display Decrypted Text */}
      {decryptedText && (
        <div className="result">
          <strong>Decrypted Text:</strong>
          <div>{decryptedText}</div>
        </div>
      )}
    </div>
  );
}

export default App;

import React, { useState } from 'react';
import './styles.css';

function App() {
  const [inputText, setInputText] = useState('');
  const [encryptedText, setEncryptedText] = useState('');
  const [decryptedText, setDecryptedText] = useState('');

  const handleEncryption = () => {
    // Your AES encryption logic here
    // Use the 'inputText' state variable for the input text
    // Set the result in the 'encryptedText' state variable
  };

  const handleDecryption = () => {
    // Your AES decryption logic here
    // Use the 'encryptedText' state variable for the input text
    // Set the result in the 'decryptedText' state variable
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

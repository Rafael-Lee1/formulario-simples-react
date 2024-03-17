import React, { useState } from 'react';
import './styles.css';

function SimpleForm() {
  const [inputValue, setInputValue] = useState('');

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div>
      <input type="text" value={inputValue} onChange={handleChange} />
      <p>Texto digitado: {inputValue}</p>
    </div>
  );
}

export default SimpleForm;

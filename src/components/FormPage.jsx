
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './FormPage.css';

const FormPage = () => {
  const [options, setOptions] = useState(['']); // Array of options entered by the user
  const navigate = useNavigate(); // React Router hook to navigate to the WheelPage

  const handleChange = (index, event) => {
    const updatedOptions = [...options];
    updatedOptions[index] = event.target.value;
    setOptions(updatedOptions);
  };

  const handleAddOption = () => {
    setOptions([...options, '']); // Add a new input field for options
  };

  const handleSubmit = () => {
    // Navigate to the Wheel page and pass the options via state
    navigate('/wheel', { state: { options } });
  };

  return (
    <div className="form-page">
           <div
  style={{
    display: "inline-block",
    padding: "10px 20px",
    border: "2px solid black",
    borderRadius: "8px",
    backgroundColor: "#f4f4f4",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
  }}
>
  <h1 style={{ color: "black", margin: 0 }}>Enter your Options</h1>
</div>
      <div className="option-inputs">
        {options.map((option, index) => (
          <input
            key={index}
            type="text"
            value={option}
            onChange={(e) => handleChange(index, e)}
            placeholder={`Option ${index + 1}`}
          />
        ))}
      </div>
      <button onClick={handleAddOption} className="btn-add-option">Add Option</button>
      <button onClick={handleSubmit} className="btn-submit">Start</button>
    </div>
  );
};

export default FormPage;

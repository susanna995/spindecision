import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import "./AddOptionsPage.css";

const AddOptionsPage = ({ options, setOptions }) => {
  const [newOption, setNewOption] = useState("");
  const history = useHistory();

  const handleAddOption = () => {
    if (newOption.trim()) {
      setOptions([...options, newOption.trim()]);
      setNewOption(""); // Reset input
    }
  };

  const handleDeleteOption = (option) => {
    setOptions(options.filter((item) => item !== option));
  };

  return (
    <div className="add-options-container">
      <h2>Add or Remove Options</h2>
      <input
        type="text"
        value={newOption}
        onChange={(e) => setNewOption(e.target.value)}
        placeholder="Enter new option"
      />
      <button onClick={handleAddOption}>Add Option</button>

      <div className="option-list">
        {options.map((option, index) => (
          <div key={index} className="option-item">
            <span>{option}</span>
            <button onClick={() => handleDeleteOption(option)}>Delete</button>
          </div>
        ))}
      </div>

      <button onClick={() => history.push("/")}>Back to Wheel</button>
    </div>
  );
};

export default AddOptionsPage;

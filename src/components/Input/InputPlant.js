import React, { useState } from "react";

function InputPlant({ onSubmit = () => null }) {
  const [value, setValue] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(value);
    setValue("");
  };

  const handleInputChange = (event) => setValue(event.target.value);

  return (
    <form onSubmit={handleSubmit} className="input-container">
      <input value={value} onChange={handleInputChange} placeholder="Plant" />
    </form>
  );
}

export default InputPlant;

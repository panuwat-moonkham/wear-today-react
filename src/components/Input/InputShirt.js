import React, { useState } from "react";

function InputShirt({ onSubmit = () => null }) {
  const [value, setValue] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(value);
    setValue("");
  };

  const handleInputChange = (event) => setValue(event.target.value);

  return (
    <form onSubmit={handleSubmit} className="input-container">
      <input value={value} onChange={handleInputChange} placeholder="Shirt" />
    </form>
  );
}

export default InputShirt;

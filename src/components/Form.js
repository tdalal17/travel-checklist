import React, { useState } from "react";

export default function Form({ onAddItem }) {
 
  const [description, setDescription] = useState("");

  
  const [quantity, setQuantity] = useState(1);

  
  const handleSubmit = (event) => {
    event.preventDefault();

    
    if (!description) return;

   
    const newItem = {
      id: Date.now(),
      description,
      quantity,
      packed: false,
    };


    onAddItem(newItem);


    setDescription("");
    setQuantity(1);
  };

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3 className="form-question">What items do you need for your adventure? 😍</h3>
      <select
        className="form-select"
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
      >
        {Array.from({ length: 20 }, (_, index) => index + 1).map((num) => (
          <option className="form-select-option" value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        className="form-input"
        type="text"
        placeholder="Enter item description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button className="form-btn">Add Item</button>
    </form>
  );
}

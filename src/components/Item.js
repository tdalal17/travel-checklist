import React from "react";

export default function Item({ item, onDeleteItem, onToggleItem }) {
  
  const packedStyle = item.packed ? { textDecoration: "line-through" } : null;

  return (
    <li className="item">
      <input
        className="input-checkbox"
        type="checkbox"
        checked={item.packed}
        onChange={() => onToggleItem(item.id)}
      />
      <span style={packedStyle}>
        {item.quantity} {item.description}
      </span>
      <button className="item-btn" onClick={() => onDeleteItem(item.id)}>
        ❌
      </button>
    </li>
  );
}

import React, { useState } from "react";
import Item from "./Item";

export default function PackingList({
  items,
  onDeleteItem,
  onToggleItem,
  onClearList,
}) {
  const [sortBy, setSortBy] = useState("input");

  
  const getSortedItems = () => {
    switch (sortBy) {
      case "description":
        return [...items].sort((a, b) => a.description.localeCompare(b.description));
      case "packed":
        return [...items].sort((a, b) => Number(a.packed) - Number(b.packed));
      default:
        return items;
    }
  };


  const sortedItems = getSortedItems();

  return (
    <div className="list">
      <ul className="list-items">
        {sortedItems.map((item) => (
          <Item
            key={item.id}
            item={item}
            onDeleteItem={onDeleteItem}
            onToggleItem={onToggleItem}
          />
        ))}
      </ul>

      <div className="actions">
        <select
          className="action-select"
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
        >
          <option value="input">Sort by input order</option>
          <option value="description">Sort by description</option>
          <option value="packed">Sort by packed status</option>
        </select>
        <button className="action-btn" onClick={onClearList}>
          Clear list
        </button>
      </div>
    </div>
  );
}

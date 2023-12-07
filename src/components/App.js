import React, { useState } from "react";
import Logo from "./Logo";
import Form from "./Form";
import PackingList from "./PackingList";
import Stats from "./Stats";
import Item from './Item'; 

export default function App() {
  
  const [items, setItems] = useState([]);

  
  const addNewItem = (newItem) => {
    setItems((prevItems) => [...prevItems, newItem]);
  };


  const removeItem = (itemId) => {
    setItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
  };

  
  const toggleItemStatus = (itemId) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId ? { ...item, packed: !item.packed } : item
      )
    );
  };

  
  const clearList = () => {
    const isConfirmed = window.confirm("Are you sure you want to delete all items?");
    if (isConfirmed) setItems([]);
  };

  return (
    <div className="app">
      <Logo />
      <Form onAddItem={addNewItem} />
      <PackingList
        items={items}
        onDeleteItem={removeItem}
        onToggleItem={toggleItemStatus}
        onClearList={clearList}
      />
      <Stats items={items} />
    </div>
  );
}

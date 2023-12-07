import React from "react";

export default function Stats({ items }) {
  
  if (!items.length) {
    return (
      <p className="stats">
        Ready to assemble your packing list? Let's begin by adding some items!
      </p>
    );
  }

  
  const numItems = items.length;
  const numPacked = items.filter((item) => item.packed).length;
  const percentagePacked = Math.round((numPacked / numItems) * 100);


  const packingMessage = percentagePacked === 100
    ? "You got everything! Ready to go ✈️"
    : `You have ${numItems} items on your list, and you already packed ${numPacked} (${percentagePacked}%)`;

  return (
    <footer className="footer">
      <p>{packingMessage}</p>
    </footer>
  );
}

"use client";

import { useState } from "react";
import ItemCard from "./item-card"; 
import itemData from "./items.json"; 

export default function ItemList() {
  const [sortBy, setSortBy] = useState("name"); 

  let items = itemData.map((item) => ({
    ...item,
  }));

  items.sort((a, b) => {
    if (sortBy === "name") {
      return a.name.localeCompare(b.name);
    } else if (sortBy === "category") {
      return a.category.localeCompare(b.category);
    } else {
      return 0; 
    }
  });

  return (
    <>
      <div className="text-center">
        <label>Sort by:</label>
        <button
          onClick={() => setSortBy("name")}
          className={`bg-indigo-500 text-white mx-4 px-4 py-2 rounded ${
            sortBy === "name" ? "bg-indigo-700" : ""
          }`}
        >
          Name
        </button>
        <span className="mx-2"></span>
        <button
          onClick={() => setSortBy("category")}
          className={`bg-indigo-500 text-white px-4 py-2 rounded ${
            sortBy === "category" ? "bg-indigo-700" : ""
          }`}
        >
          Category
        </button>
      </div>

      {items.map((item) => (
        <ItemCard key={item.id} item={item} />
      ))}
    </>
  );
}

import React, { useState } from "react";

import "./SelectCategory.css";

export const SelectCategory = () => {
  const [categories, setCategories] = useState([
    "All Categories",
    "Games",
    "Music",
    "Movies",
    "Books",
    "Apps",
  ]);

  const [categorySelected, setCategorySelected] = useState("All");

  const handleChange = (e) => {
    setCategorySelected(e.target.value);
  };

  return (
    <form className="selecte-form">
      <select
        onChange={handleChange}
        className="form-select form-select-lg mb-3 select-input"
        aria-label="Default select example"
      >
        {categories.map((category) => (
          <option key={category}>{category}</option>
        ))}
      </select>
    </form>
  );
};

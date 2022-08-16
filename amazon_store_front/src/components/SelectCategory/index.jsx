import React, { useState } from "react";

import "./SelectCategory.css";

const categories = ["All", "Games", "Music", "Movies", "Books", "Apps"];

export const SelectCategory = ({ setCategory }) => {
  const handleChange = (e) => {
    setCategory(e.target.value);
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

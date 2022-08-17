import React, { useEffect, useState } from "react";

import "./SelectCategory.css";

const urlCategories = "http://localhost:8080/api/categories";

export const SelectCategory = ({ setCategory }) => {
  const [categories, setCategories] = useState([{ category: "All" }]);

  useEffect(() => {
    const getCategories = async () => {
      const cats = await fetch(urlCategories);
      const jsonCats = await cats.json();
      setCategories([{ category: "All" }, ...jsonCats.categories]);
    };

    getCategories();
  }, []);

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
          <option key={category.category}>{category.category}</option>
        ))}
      </select>
    </form>
  );
};

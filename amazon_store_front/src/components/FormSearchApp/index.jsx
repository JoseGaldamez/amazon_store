import React from "react";
import { FaSistrix } from "react-icons/fa";

export const FormSearchApp = ({ handleSearch }) => {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleSearch(e.target.search.value);
      }}
      className="form-inline my-2 my-lg-0"
      onChange={() => {
        handleSearch(document.getElementById("search").value);
      }}
    >
      <input
        className="form-control mr-sm-2"
        type="text"
        id="search"
        name="search"
        placeholder="Search"
        aria-label="Search"
      />
      <button className="btn btn-warning my-2 my-sm-0" type="submit">
        <FaSistrix size={20} />
      </button>
    </form>
  );
};

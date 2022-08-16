import React from "react";
import { FaSistrix } from "react-icons/fa";

export const FormSearchApp = () => {
  return (
    <form className="form-inline my-2 my-lg-0">
      <input
        className="form-control mr-sm-2"
        type="text"
        placeholder="Search"
        aria-label="Search"
      />
      <button className="btn btn-warning my-2 my-sm-0" type="submit">
        <FaSistrix size={20} />
      </button>
    </form>
  );
};

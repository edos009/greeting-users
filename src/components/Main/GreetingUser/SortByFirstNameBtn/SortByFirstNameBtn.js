import React from "react";
import "./SortByFirstNameBtn.css";

const SortByFirstNameBtn = (props) => {
  const { isSortByFirstName, sortByFirstName } = props;
  return (
    <button className="sort_by_first_name" onClick={sortByFirstName}>
      Sort by First Name: {isSortByFirstName ? "Down" : "Up"}
    </button>
  );
};

export default SortByFirstNameBtn;

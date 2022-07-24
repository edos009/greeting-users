import React from "react";
import "./SortByIdBtn.css";

const SortByIdBtn = (props) => {
  const { isSortByIdUp, sortById } = props;
  return (
    <button className="sort_by_id" onClick={sortById}>
      Sort by ID: {isSortByIdUp ? "Down" : "Up"}
    </button>
  );
};

export default SortByIdBtn;

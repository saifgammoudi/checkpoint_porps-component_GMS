import React from "react";
import StarRating from "../StarRating/Star";
import "./Search.css";

const Search = ({ handleSearch, searchValue, handlesearchrate, searchRat }) => {
  return (
    <div className="header">
      <h1>tunibest</h1>
      <div className="serach">
        <input type="text" value={searchValue} onChange={handleSearch} />
      </div>
      <StarRating rate={searchRat} handleRate={handlesearchrate} />
    </div>
  );
};

export default Search;

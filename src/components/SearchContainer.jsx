import React from "react";
import { Link } from "react-router-dom";

const SearchContainer = (props) => {
  return (
    <div>
      <label for="title">Title</label>
      <input type="text" id="title"></input>

      <Link to="/default">
        <button type="button">Show matching Plays</button>
      </Link>
      <Link to="/default">
        <button type="button">Show All Plays</button>
      </Link>
    </div>
  );
};
export default SearchContainer;

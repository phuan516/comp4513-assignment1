import React from "react";

const FilterBox = (props) => {
  return (
    <div>
      <h1>Play Filter</h1>
      <label htmlFor="title">Title</label>
      <input type="text" name="title" id="title"></input>
      <input type="checkbox" />
      <label htmlFor="before">
        Before
        <input type="text" />
      </label>
      <input type="checkbox" />
      <label htmlFor="after">
        After
        <input type="text" />
      </label>
      <label htmlFor="genre">Genre</label>
      <select name="genre" id="genre">
        <option value="add option">add options</option>
      </select>
      <button type="button">Filter</button>
      <button type="button">Clear</button>
    </div>
  );
};

export default FilterBox;

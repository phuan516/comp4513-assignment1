import React from "react";
import ListBoxItem from "./ListBoxItem";

const ListBox = (props) => {
  return (
    <div>
      <h1>List / Match</h1>
      <h3>Title</h3>
      <h3>List</h3>
      <ListBoxItem />
      <ListBoxItem />
      <ListBoxItem />
    </div>
  );
};

export default ListBox;

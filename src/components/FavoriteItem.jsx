import React from "react";

const FavoriteItem = (props) => {
  return (
    <div>
      <p>Title: {props.play.title}</p>
      <button type="button">Del</button>
    </div>
  );
};

export default FavoriteItem;

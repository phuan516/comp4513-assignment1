import React from "react";
import FavoriteItem from "./FavoriteItem";

const FavoriteBox = (props) => {
  console.log(props.plays);
  return (
    <div>
      <h1>Favorite</h1>
      {props.plays.map((p) => (
        <FavoriteItem play={p} />
      ))}
    </div>
  );
};

export default FavoriteBox;

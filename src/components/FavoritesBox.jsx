import React from "react";
import FavoriteItem from "./FavoriteItem";

const FavoriteBox = (props) => {
  return (
    <div>
      <h1>Favorite</h1>
      {props.plays.map((p) => (
        <FavoriteItem play={p} removeFromLike={props.removeFromLike} />
      ))}
    </div>
  );
};

export default FavoriteBox;

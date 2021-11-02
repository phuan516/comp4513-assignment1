import React from "react";
import FavoriteItem from "./FavoriteItem";

const FavoriteBox = (props) => {
  return (
    <div>
      <h1>Favorites</h1>
      {props.plays.map((p, index) => (
        <FavoriteItem play={p} removeFromLike={props.removeFromLike} key={index}/>
      ))}
    </div>
  );
};

export default FavoriteBox;

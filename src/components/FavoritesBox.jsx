import React from "react";
import FavoriteItem from "./FavoriteItem";

const FavoriteBox = (props) => {
  return (
    <div>
      <h1>Favorite</h1>
      <FavoriteItem />
      <FavoriteItem />
      <FavoriteItem />
    </div>
  );
};

export default FavoriteBox;

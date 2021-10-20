import React from "react";
import HeaderBar from "./HeaderBar";
import FavoriteBox from "./FavoritesBox";
import FilterBox from "./FilterBox";
import ListBox from "./ListBox";

const DefaultPage = (props) => {
  return (
    <div>
      <HeaderBar />
      <FavoriteBox />
      <FilterBox />
      <ListBox />
    </div>
  );
};

export default DefaultPage;

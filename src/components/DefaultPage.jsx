import React from "react";
import HeaderBar from "./HeaderBar";
import FavoriteBox from "./FavoritesBox";
import FilterBox from "./FilterBox";
import ListBox from "./ListBox";

const DefaultPage = (props) => {
  return (
    <div>
      <HeaderBar />
      <FavoriteBox
        plays={props.likedPlays}
        removeFromLike={props.removeFromLike}
      />
      <FilterBox  updateFilteredData = {props.updateFilteredData}/>
      <ListBox plays={props.plays} addToLike={props.addToLike} allPlays = {props.allPlays} />
    </div>
  );
};

export default DefaultPage;
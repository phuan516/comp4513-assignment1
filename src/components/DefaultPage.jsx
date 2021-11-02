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
      <FilterBox />
      <ListBox plays={props.plays} addToLike={props.addToLike} removeFromLike={props.removeFromLike} updateCurrent={props.updateCurrent}/>
    </div>
  );
};

export default DefaultPage;

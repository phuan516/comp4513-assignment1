import React from "react";
import { Link } from "react-router-dom";

const FavoriteItem = (props) => {
  const remove = () => {
    props.removeFromLike(props.play);
    alert(props.play.title + " has been removed from favorite");
  };

  const currentPlay = () => {
    props.updateCurrent(props.play);
  };

  return (
    <div id="favoriteItem">
      <Link to="/playDetails">
        <a href="#" onClick={currentPlay}>
          {" "}
          {props.play.title}{" "}
        </a>
      </Link>
      <br />
      <button type="button" id="deleteButton" onClick={remove}>
        Remove
      </button>
    </div>
  );
};

export default FavoriteItem;

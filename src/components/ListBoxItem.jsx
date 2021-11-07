import React from "react";
import { Link } from "react-router-dom";

const ListBoxItem = (props) => {
  const add = () => {
    props.addToLike(props.play);
  };

const currentPlay = () => {
  props.updateCurrent(props.play);
}

  return (
    <div id="listBoxItems">
        <p id="playInfoTitle">{props.play.title}</p>
        <p id="playDate">{props.play.likelyDate}</p>
      <div id="playListButtons">
        <button type="button" id="likeButton" onClick={add}>
          Like
        </button>
        <Link to="/playDetails">
          <button type="button" onClick={currentPlay}>View</button>
        </Link>
        </div>
    </div>
  );
};

export default ListBoxItem;

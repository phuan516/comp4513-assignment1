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
    <div>
      <p>{props.play.title}</p>
      <p>{props.play.likelyDate}</p>
      <button type="button" onClick={add}>
        Like
      </button>
      <Link to="/playDetails">
        <button type="button" onClick={currentPlay}>View</button>
      </Link>
      
    </div>
  );
};

export default ListBoxItem;

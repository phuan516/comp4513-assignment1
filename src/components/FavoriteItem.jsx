import React from "react";

const FavoriteItem = (props) => {
  const remove = () => {
    props.removeFromLike(props.play);
  };
  return (
    <div>
      <p> {props.play.title}</p>
      <button type="button" id="deleteButton" onClick={remove}>
        Remove
      </button>
    </div>
  );
};

export default FavoriteItem;

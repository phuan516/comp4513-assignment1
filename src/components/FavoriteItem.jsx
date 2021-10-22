import React from "react";

const FavoriteItem = (props) => {
  const remove = () => {
    props.removeFromLike(props.play);
  };
  return (
    <div>
      <p>Title: {props.play.title}</p>
      <button type="button" onClick={remove}>
        Del
      </button>
    </div>
  );
};

export default FavoriteItem;

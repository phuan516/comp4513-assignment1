import React from "react";

const ListBoxItem = (props) => {
  const add = () => {
    props.addToLike(props.play);
  };
  return (
    <div>
      <p>{props.play.title}</p>
      <p>{props.play.likelyDate}</p>
      <p>{props.play.genre}</p>
      <button type="button" onClick={add}>
        Like
      </button>
      <button type="button">View</button>
    </div>
  );
};

export default ListBoxItem;

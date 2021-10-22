import React from "react";

const ListBoxItem = (props) => {
  const addToLike = () => {
    props.addLike(props.play);
  };
  return (
    <div>
      <p>{props.play.title}</p>
      <p>{props.play.likelyDate}</p>
      <button type="button" onClick={addToLike}>
        Like
      </button>
      <button type="button">View</button>
    </div>
  );
};

export default ListBoxItem;

import React from "react";

const DetailsTab = (props) => {
  return (
    <div className="DetailsTab">
        <p> Likely date of composition: {props.current.likelyDate}</p>
        <p> Genre: {props.current.history}</p>
        <h2> Web Links</h2>
        <p> Wiki Link: {props.current.wiki}</p>
        <p> Gutenberg Link: {props.current.gutenberg}</p>
        <p> Shakespear.org Link: {props.current.shakespeareOrg}</p>
        <h2> Description </h2>
        <p> {props.current.desc} </p>
    </div>
  );
};
export default DetailsTab;
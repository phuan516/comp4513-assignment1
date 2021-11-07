import React from "react";
import { Link } from "react-router-dom";


const FavoriteItem = (props) => {

  const remove = () => {
    props.removeFromLike(props.play);
  };

  const updateCurrentPlay = () => {
    console.log("B4 triggerd");
    props.updateCurrent(props.play);

    const url = "https://www.randyconnolly.com/funwebdev/3rd/api/shakespeare/play.php?name="+props.play.id;
    fetch (url)
    .then (response => response.json())
    .then(data => { localStorage.setItem("playInfo", JSON.stringify(data))} )
    .then (error => console.log(error));

    props.updatePlayInfo(JSON.parse(localStorage.getItem("playInfo")));
  }

  

  return (
    <div id="favoriteItem">
      
      <Link to="/playDetails">
          <button className="link" onClick={updateCurrentPlay}> {props.play.title} </button>
        </Link><br/>

      <button type="button" id="deleteButton" onClick={remove}>
        Remove
      </button>
    </div>
  );
};

export default FavoriteItem;

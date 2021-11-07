import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const SearchContainer = (props) => {
  const [title, updateTitle] = useState();
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleInputChange = e => {
    updateTitle(e.target.value);
  }

  /*
  const loadingHandler = () => {
    setLoading(!loading);
    setShow(!show);
  };
  
  useEffect (() => {
    if (loading) {
      setTimeout(() => {
        setLoading(false);
      }, 2000);
    }
  }, [loading]);
  
    if (loading) {
      return (
        <div id="loader"><img id="loaderImage" src="./loadingGif/simpson.gif" alt="Loading Plays"></img> </div>
      );
    }

  return (

    <div id="loader"><img id="loaderImage" src="./loadingGif/simpson.gif" alt="Loading Plays"></img> </div>*/


    return (
    <div id="searchContainer">

      <div id="homeTitleInput">
        <input type="text" id="title" placeholder="Search Play Here" onChange={handleInputChange}></input>
      </div>
      <div id="homeButtons">
      <Link to={{pathname:"/default", state: {title: title }}}>
        <div id="matchingButton">
          <button type="button" data-inline="true" >Show matching Plays</button>
        </div>
      </Link>
      <Link to={{pathname:"/default", state: {title: '' }}}>
        <div id="showAllButton">
          <button type="button" data-inline="true"  >Show All Plays</button>
        </div>
      </Link>
      </div>
    </div> 
  );
};

export default SearchContainer;
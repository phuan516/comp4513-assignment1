import React from "react";
import SearchContainer from "./SearchContainer";


const HomePage = (props) => {
  return (
    <div id="homePage">
      <div id="homeSearch"> <SearchContainer /> 
      </div>
      
        <div id="heroCredit">
          Photo by{" "}
          <a href="https://unsplash.com/@maxmuselmann?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
            Max Muselmann
          </a>{" "}
          on{" "}
          <a href="https://unsplash.com/s/photos/shakespeare?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
            Unsplash
          </a>
        
      </div>
    </div>
  );
};
export default HomePage;

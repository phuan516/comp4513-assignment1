import React from "react";
import SearchContainer from "./SearchContainer";
//Add hero image
//Add rectangle to the middle of the page that contains a search field, and 2 button.
const HomePage = (props) => {
  return (
    <div>
      <img src="https://images.unsplash.com/photo-1553782749-5ab8693a5f4f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1078&q=80" />
      <SearchContainer />
      <p>
        Photo by{" "}
        <a href="https://unsplash.com/@maxmuselmann?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
          Max Muselmann
        </a>{" "}
        on{" "}
        <a href="https://unsplash.com/s/photos/shakespeare?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
          Unsplash
        </a>
      </p>
    </div>
  );
};
export default HomePage;

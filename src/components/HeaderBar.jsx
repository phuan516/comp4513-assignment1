import React from "react";
import { Link } from "react-router-dom";

const HeaderBar = (props) => {
  return (
    <div>
      <div>Logo</div>
      <Link to="/about">
        <button type="button">About</button>
      </Link>
    </div>
  );
};

export default HeaderBar;

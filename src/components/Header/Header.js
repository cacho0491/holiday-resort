import React from "react";

import { NavLink } from "react-router-dom";
import classes from "./Header.module.css";

const header = () => {
  return (
    <header className={classes.Header}>
      <h6>Logo</h6>
      <nav>
        <NavLink className={classes.Link} to="/">
          Home
        </NavLink>
        <NavLink className={classes.Link} to="/search">
          Search
        </NavLink>
      </nav>
    </header>
  );
};

export default header;

import React from "react";

import { Link } from "react-router-dom";
import classes from "./Button.module.css";

const button = (props) => {
  return (
    <Link to={props.path} className={classes.Button}>
      {props.showRooms}
    </Link>
  );
};

export default button;

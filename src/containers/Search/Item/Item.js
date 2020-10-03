import React from "react";

import classes from "./Item.module.css";
import { Link } from "react-router-dom";
import Button from "../../../components/UI/Button/Button";

const item = (props) => {
  return (
    <div
      style={{ backgroundImage: `url(${props.picture})` }}
      className={classes.Item}
    >
      <span>{props.roomName}</span>
      <button id={props.roomId} onClick={props.roomBtn}>
        Find out more
      </button>
    </div>
  );
};
export default item;

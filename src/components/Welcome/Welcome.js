import { render } from "@testing-library/react";
import React from "react";

import classes from "./Welcome.module.css";
import Header from "../Header/Header";
import Button from "../UI/Button/Button";

const welcome = () => {
  return (
    <div className={classes.Welcome}>
      <div className={classes.WelcomeMain}>
        <h1>Luxury Holidays</h1>
        <p>
          Rooms starting at only <strong>$399</strong>
        </p>
        <div className={classes.Button}>
          <Button showRooms="Rooms" path="/search" />
        </div>
      </div>
    </div>
  );
};

export default welcome;

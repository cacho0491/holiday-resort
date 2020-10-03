import React from "react";

import classes from "./About.module.css";

const about = (props) => {
  const info = [];
  for (let key in props.info) {
    info.push(`${key}: ${props.info[key]}`);
  }

  return (
    <section className={classes.About}>
      <h2 className={classes.AboutHeading}>{props.heading}</h2>
      <div className={classes.AboutImages}>
        <div className={classes.AboutImg1}></div>
        <div className={classes.AboutImg2}></div>
        <div className={classes.AboutImg3}></div>
      </div>
      <div className={classes.AboutDescription}>
        <p>{props.details}</p>
        <p>{props.details}</p>
      </div>
      <div className={classes.AboutInfo}>
        <h4>Info</h4>
        <ul>{info ? info.map((item) => <li>{item}</li>) : null}</ul>
      </div>
    </section>
  );
};

export default about;

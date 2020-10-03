import React from "react";

import classes from "./Review.module.css";
import photo1 from "../../../assets/review1.jpg";

const review = () => {
  return (
    <React.Fragment>
      <div className={classes.PersonalDetails}>
        <img src={photo1} alt="Jhonson" />
        <p>Johnson</p>
      </div>
      <div className={classes.ReviewInfo}>
        <h6>Amazing</h6>
        <q className={classes.Quote}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi non ex
          ex. Cras placerat, libero sed posuere ultrices, massa quam ullamcorper
          nibh, ac ultricies metus mauris vitae elit.
        </q>
        <p>*****</p>
      </div>
    </React.Fragment>
  );
};

export default review;

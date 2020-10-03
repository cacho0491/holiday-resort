import React from "react";

import classes from "./Reviews.module.css";
import Review from "./Review/Review";

const reviews = () => {
  return (
    <section className={classes.Reviews}>
      <h3>What our customers say</h3>
      <div className={classes.ReviewsList}>
        <div className={classes.Review1}>
          <Review />
        </div>
        <div className={classes.Review2}>
          <Review />
        </div>
        <div className={classes.Review3}>
          <Review />
        </div>
      </div>
    </section>
  );
};

export default reviews;

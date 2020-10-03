import React, { Component } from "react";

import classes from "./Base.module.css";
import Welcome from "../../components/Welcome/Welcome";

import About from "../../components/About/About";
import Reviews from "../../components/Reviews/Reviews";
import Gallery from "../../components/Gallery/Gallery";
import Footer from "../../components/Footer/Footer";
import { connect } from "react-redux";

class Base extends Component {
  render() {
    return (
      <div className={classes.BaseContainer}>
        {/* <Header /> */}
        <Welcome />
        <About
          heading={this.props.base.heading}
          details={this.props.base.details}
          info={this.props.base.info}
        />
        <Reviews />
        <Gallery />
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    base: state.resort.aboutMainPage,
  };
};

export default connect(mapStateToProps)(Base);

import React, { Component } from "react";

import classes from "./Property.module.css";
import About from "../../components/About/About";
import { connect } from "react-redux";

class Property extends Component {
  render() {
    const roomId = Number(this.props.match.params.id);
    const room = this.props.rooms.find((room) => room.id === roomId);
    console.log(room);

    return (
      <main className={classes.Property}>
        {/* <h1 className={classes.PropertyHeading}>Russel Gardens</h1> */}
        <div className={classes.MainPicture}>
          <span className={classes.PropertyName}>{room.name}</span>
        </div>
        <div className={classes.PropertyInfo}>
          <About
            heading="Room Details"
            details={room.details}
            info={room.info}
          />
        </div>
        <div className={classes.PropertyExtras}>
          <h5>Extras</h5>
          <div className={classes.ExtrasList}>
            {room.extras.map((extra) => (
              <li>{extra}</li>
            ))}
          </div>
        </div>
      </main>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    rooms: state.rooms.rooms,
  };
};

export default connect(mapStateToProps)(Property);

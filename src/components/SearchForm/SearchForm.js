import React from "react";

import classes from "./SearchForm.module.css";

const searchForm = (props) => {
  return (
    <div className={classes.SearchForm}>
      <h3>Search Rooms</h3>
      <form className={classes.Form}>
        <div>
          <h5>Room type</h5>
          <select
            value={props.searchOptions.room}
            onChange={props.search}
            name="select"
            id="room"
          >
            {props.searchOptions.roomType.map((type) => (
              <option key={type}>{type}</option>
            ))}
          </select>
        </div>
        <div>
          <h5>Guests</h5>
          <select
            value={props.searchOptions.maxGuests}
            onChange={props.search}
            name="select"
            id="guest"
          >
            {props.searchOptions.guests.map((guest) => (
              <option key={guest}>{guest}</option>
            ))}
          </select>
        </div>
        <div>
          <h5>Price Range: {props.searchOptions.priceRange}</h5>
          <div className={classes.SlideContainer}>
            <input
              type="range"
              min="0"
              max="1000"
              onChange={props.search}
              step=""
              className={classes.Slide}
              id="price"
            />
          </div>
        </div>

        {/* <div>
          <h5>Room Size</h5>
          <div>
            <input type="number" name="room-min-size" value="0" />
            <input type="number" name="room-max-size" value="1999" />
          </div>
        </div> */}
        <div>
          <h5>Board</h5>
          <div>
            <input
              id="half"
              type="checkbox"
              name="half-board"
              onChange={props.search}
            />
            <label for="half">Half Board</label>
            <input
              id="full"
              type="checkbox"
              name="half-board"
              onChange={props.search}
            />
            <label for="full">Full Board</label>
          </div>
        </div>
      </form>
    </div>
  );
};

export default searchForm;

import React, { Component } from "react";

import SearchForm from "../../components/SearchForm/SearchForm";
import Item from "./Item/Item";
import classes from "./Search.module.css";
import { connect } from "react-redux";
import * as actions from "../../store/actions/index";

class Search extends Component {
  componentDidUpdate(prevProps, prevState) {
    if (
      this.props.searchOptions.room !== prevProps.searchOptions.room ||
      this.props.searchOptions.guestNumber !==
        prevProps.searchOptions.guestNumber ||
      this.props.searchOptions.priceRange !==
        prevProps.searchOptions.priceRange ||
      this.props.searchOptions.halfBoard !==
        prevProps.searchOptions.halfBoard ||
      this.props.searchOptions.fullBoard !== prevProps.searchOptions.fullBoard
    ) {
      this.filterData();
    }
  }

  filterData = () => {
    let filteredData = this.props.rooms;

    const state = this.props.searchOptions;
    console.log(state);
    const filterProperties = [
      "room",
      "guestNumber",
      "priceRange",
      "halfBoard",
      "fullBoard",
    ];
    filterProperties.forEach((filterBy) => {
      const filterValue = state[filterBy];
      console.log(filterValue);
      if (filterValue) {
        console.log("f");
        if (filterBy === "room") {
          filteredData = filteredData.filter(
            (room) => room.name === filterValue
          );
        }
        if (filterBy === "guestNumber") {
          filteredData = filteredData.filter(
            (room) => room.maxGuests === filterValue
          );
        }
        if (filterBy === "priceRange") {
          filteredData = filteredData.filter(
            (room) => room.info.price <= filterValue
          );
        }
        if (filterBy === "halfBoard") {
          filteredData = filteredData.filter(
            (room) => room.info.board === "Half"
          );
        }
        if (filterBy === "fullBoard") {
          filteredData = filteredData.filter(
            (room) => room.info.board === "Full"
          );
        }
      }
      this.props.onFilteringData(filteredData);
    });
  };

  showRoomHandler = (e) => {
    console.log(e.target.id);
    this.props.history.push("/" + e.target.id);
  };

  searchHandler = (e) => {
    console.log(e.target);
    this.props.onSearch(e.target.id, e.target.value);
  };

  render() {
    let dataToDisplay = null;
    if (this.props.searchOptions.filteredData) {
      dataToDisplay = this.props.searchOptions.filteredData;
    } else {
      dataToDisplay = this.props.rooms;
    }
    return (
      <div className={classes.Search}>
        <div className={classes.MainPicture}>
          <div className={classes.MainText}>
            <h1>Find your next holiday</h1>
          </div>
        </div>
        <SearchForm
          searchOptions={this.props.searchOptions}
          search={this.searchHandler}
        />
        <div className={classes.Items}>
          {dataToDisplay.map((room) => {
            return (
              <Item
                roomBtn={(e) => this.showRoomHandler(e)}
                roomId={room.id}
                roomName={room.name}
                picture={room.picture}
              />
            );
          })}
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    rooms: state.rooms.rooms,
    searchOptions: state.search,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    onSearch: (id, type) => dispatch(actions.searchHandler(id, type)),
    onFilteringData: (data) => dispatch(actions.filterData(data)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Search);

import * as actionTypes from "../actions/actionTypes";

const initialState = {
  roomType: ["All", "Single", "Double", "Family", "Presidential"],
  guests: ["All", "1", "2", "4", "8", "10"],
  board: ["Full Board", "Half Board"],
  room: null,
  guestNumber: null,
  priceRange: null,
  minRoomSize: 0,
  maxRoomSize: 0,
  halfBoard: false,
  fullBoard: false,
  filteredData: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ROOM_TYPE:
      return {
        ...state,
        room: action.roomType,
      };
    case actionTypes.GUEST_NUMBER:
      return {
        ...state,
        guestNumber: action.guestNumber,
      };
    case actionTypes.FILTER_DATA:
      return {
        ...state,
        filteredData: action.data,
      };
    case actionTypes.PRICE_RANGE:
      return {
        ...state,
        priceRange: action.price,
      };
    case actionTypes.HALF_BOARD_CHECKBOX:
      return {
        ...state,
        halfBoard: !state.halfBoard,
      };
    case actionTypes.FULL_BOARD_CHECKBOX:
      return {
        ...state,
        fullBoard: !state.fullBoard,
      };
    default:
      return state;
  }
};

export default reducer;

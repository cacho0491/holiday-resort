import * as actionTypes from "./actionTypes";

export const roomType = (type) => {
  return {
    type: actionTypes.ROOM_TYPE,
    roomType: type,
  };
};

export const guestNumber = (number) => {
  return {
    type: actionTypes.GUEST_NUMBER,
    guestNumber: Number(number),
  };
};

export const priceRange = (price) => {
  return {
    type: actionTypes.PRICE_RANGE,
    price: Number(price),
  };
};

export const halfCheckbox = () => {
  return {
    type: actionTypes.HALF_BOARD_CHECKBOX,
  };
};
export const fullCheckbox = () => {
  return {
    type: actionTypes.FULL_BOARD_CHECKBOX,
  };
};

export const searchHandler = (id, value) => {
  return (dispatch) => {
    switch (id) {
      case "room":
        dispatch(roomType(value));
        break;
      case "guest":
        dispatch(guestNumber(value));
        break;
      case "price":
        dispatch(priceRange(value));
        break;
      case "half":
        dispatch(halfCheckbox());
        break;
      case "full":
        dispatch(fullCheckbox());
        break;
      default:
        return;
    }
  };
};

export const filterData = (data) => {
  return {
    type: actionTypes.FILTER_DATA,
    data: data,
  };
};

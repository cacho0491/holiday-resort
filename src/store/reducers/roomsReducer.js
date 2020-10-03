const initialState = {
  rooms: [
    {
      id: 1,
      name: "Single",
      picture: require("../../assets/gal-2.jpeg"),
      details:
        "Pellentesque pharetra, quam eget aliquet venenatis, mi tortor malesuada sapien, mattis tempor sem sapien imperdiet purus. Duis volutpat varius diam in cursus. In",
      info: {
        price: 400,
        size: "500 SQFT",
        maxCapacity: "1 person",
        board: "Half",
      },
      maxGuests: 1,
      extras: ["Deluxe pillows", "Free Toilettes", "Wifi"],
    },
    {
      id: 2,
      name: "Double",
      picture: require("../../assets/gal-3.jpeg"),
      details:
        "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris et hendrerit magna. Nam ligula lorem, rutrum vel rhoncus sed, ornare sed urna.",
      info: {
        price: 600,
        size: "600 SQFT",
        maxCapacity: "2 people",
        board: "Half",
      },
      maxGuests: 2,
      extras: ["Deluxe pillows", "Free Toilettes", "Wifi"],
    },
    {
      id: 3,
      name: "Family",
      picture: require("../../assets/gal-4.jpeg"),
      details:
        "Suspendisse faucibus velit non ipsum convallis sollicitudin. Nullam vulputate pharetra mi, sit amet condimentum ante consectetur ac. Morbi vel nibh ultrices ante blandit iaculis. Nullam a lectus urna. ",
      info: {
        price: 800,
        size: "800 SQFT",
        maxCapacity: "4 people",
        board: "Full",
      },
      maxGuests: 4,
      extras: ["Deluxe pillows", "Free Toilettes", "Wifi"],
    },
    {
      id: 4,
      name: "Presidential",
      picture: require("../../assets/gal-5.jpeg"),
      details:
        " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin eu metus nec neque pulvinar dapibus ut a velit. In magna enim, convallis vitae tellus vel, malesuada luctus sapien.",
      info: {
        price: 1000,
        size: "1000 SQFT",
        maxCapacity: "5 person",
        board: "Full",
      },
      maxGuests: 5,
      extras: ["Deluxe pillows", "Free Toilettes", "Wifi"],
    },
  ],
};

const reducer = (state = initialState, action) => {
  return state;
};

export default reducer;

const initialState = {
  tickets: [
    {
      row: "A",
      seats: [
        { name: "A1", price: 75000, booked: false, checked: false },
        { name: "A2", price: 75000, booked: false, checked: false },
        { name: "A3", price: 75000, booked: false, checked: false },
        { name: "A4", price: 75000, booked: false, checked: false },
        { name: "A5", price: 75000, booked: false, checked: false },
        { name: "A6", price: 75000, booked: false, checked: false },
        { name: "A7", price: 75000, booked: false, checked: false },
        { name: "A8", price: 75000, booked: false, checked: false },
        { name: "A9", price: 75000, booked: false, checked: false },
        { name: "A10", price: 75000, booked: false, checked: false },
        { name: "A11", price: 75000, booked: false, checked: false },
        { name: "A12", price: 75000, booked: false, checked: false },
      ],
    },
    {
      row: "B",
      seats: [
        { name: "B1", price: 75000, booked: false, checked: false },
        { name: "B2", price: 75000, booked: false, checked: false },
        { name: "B3", price: 75000, booked: false, checked: false },
        { name: "B4", price: 75000, booked: false, checked: false },
        { name: "B5", price: 75000, booked: false, checked: false },
        { name: "B6", price: 75000, booked: false, checked: false },
        { name: "B7", price: 75000, booked: false, checked: false },
        { name: "B8", price: 75000, booked: false, checked: false },
        { name: "B9", price: 75000, booked: false, checked: false },
        { name: "B10", price: 75000, booked: false, checked: false },
        { name: "B11", price: 75000, booked: false, checked: false },
        { name: "B12", price: 75000, booked: false, checked: false },
      ],
    },
    {
      row: "C",
      seats: [
        { name: "C1", price: 75000, booked: false, checked: false },
        { name: "C2", price: 75000, booked: false, checked: false },
        { name: "C3", price: 75000, booked: false, checked: false },
        { name: "C4", price: 75000, booked: false, checked: false },
        { name: "C5", price: 75000, booked: false, checked: false },
        { name: "C6", price: 75000, booked: false, checked: false },
        { name: "C7", price: 75000, booked: false, checked: false },
        { name: "C8", price: 75000, booked: false, checked: false },
        { name: "C9", price: 75000, booked: false, checked: false },
        { name: "C10", price: 75000, booked: false, checked: false },
        { name: "C11", price: 75000, booked: false, checked: false },
        { name: "C12", price: 75000, booked: false, checked: false },
      ],
    },
    {
      row: "D",
      seats: [
        { name: "D1", price: 75000, booked: false, checked: false },
        { name: "D2", price: 75000, booked: false, checked: false },
        { name: "D3", price: 75000, booked: false, checked: false },
        { name: "D4", price: 75000, booked: false, checked: false },
        { name: "D5", price: 75000, booked: false, checked: false },
        { name: "D6", price: 75000, booked: false, checked: false },
        { name: "D7", price: 75000, booked: false, checked: false },
        { name: "D8", price: 75000, booked: false, checked: false },
        { name: "D9", price: 75000, booked: false, checked: false },
        { name: "D10", price: 75000, booked: false, checked: false },
        { name: "D11", price: 75000, booked: false, checked: false },
        { name: "D12", price: 75000, booked: false, checked: false },
      ],
    },
    {
      row: "E",
      seats: [
        { name: "E1", price: 75000, booked: false, checked: false },
        { name: "E2", price: 75000, booked: false, checked: false },
        { name: "E3", price: 75000, booked: false, checked: false },
        { name: "E4", price: 75000, booked: false, checked: false },
        { name: "E5", price: 75000, booked: false, checked: false },
        { name: "E6", price: 75000, booked: false, checked: false },
        { name: "E7", price: 75000, booked: false, checked: false },
        { name: "E8", price: 75000, booked: false, checked: false },
        { name: "E9", price: 75000, booked: false, checked: false },
        { name: "E10", price: 75000, booked: false, checked: false },
        { name: "E11", price: 75000, booked: false, checked: false },
        { name: "E12", price: 75000, booked: false, checked: false },
      ],
    },
    {
      row: "F",
      seats: [
        { name: "F1", price: 75000, booked: false, checked: false },
        { name: "F2", price: 75000, booked: false, checked: false },
        { name: "F3", price: 75000, booked: false, checked: false },
        { name: "F4", price: 75000, booked: false, checked: false },
        { name: "F5", price: 75000, booked: false, checked: false },
        { name: "F6", price: 75000, booked: false, checked: false },
        { name: "F7", price: 75000, booked: false, checked: false },
        { name: "F8", price: 75000, booked: false, checked: false },
        { name: "F9", price: 75000, booked: false, checked: false },
        { name: "F10", price: 75000, booked: false, checked: false },
        { name: "F11", price: 75000, booked: false, checked: false },
        { name: "F12", price: 75000, booked: false, checked: false },
      ],
    },
    {
      row: "G",
      seats: [
        { name: "G1", price: 75000, booked: false, checked: false },
        { name: "G2", price: 75000, booked: false, checked: false },
        { name: "G3", price: 75000, booked: false, checked: false },
        { name: "G4", price: 75000, booked: false, checked: false },
        { name: "G5", price: 75000, booked: false, checked: false },
        { name: "G6", price: 75000, booked: false, checked: false },
        { name: "G7", price: 75000, booked: false, checked: false },
        { name: "G8", price: 75000, booked: false, checked: false },
        { name: "G9", price: 75000, booked: false, checked: false },
        { name: "G10", price: 75000, booked: false, checked: false },
        { name: "G11", price: 75000, booked: false, checked: false },
        { name: "G12", price: 75000, booked: false, checked: false },
      ],
    },
    {
      row: "H",
      seats: [
        { name: "H1", price: 75000, booked: false, checked: false },
        { name: "H2", price: 75000, booked: false, checked: false },
        { name: "H3", price: 75000, booked: false, checked: false },
        { name: "H4", price: 75000, booked: false, checked: false },
        { name: "H5", price: 75000, booked: false, checked: false },
        { name: "H6", price: 75000, booked: false, checked: false },
        { name: "H7", price: 75000, booked: false, checked: false },
        { name: "H8", price: 75000, booked: false, checked: false },
        { name: "H9", price: 75000, booked: false, checked: false },
        { name: "H10", price: 75000, booked: false, checked: false },
        { name: "H11", price: 75000, booked: false, checked: false },
        { name: "H12", price: 75000, booked: false, checked: false },
      ],
    },
    {
      row: "I",
      seats: [
        { name: "I1", price: 75000, booked: false, checked: false },
        { name: "I2", price: 75000, booked: false, checked: false },
        { name: "I3", price: 75000, booked: false, checked: false },
        { name: "I4", price: 75000, booked: false, checked: false },
        { name: "I5", price: 75000, booked: false, checked: false },
        { name: "I6", price: 75000, booked: false, checked: false },
        { name: "I7", price: 75000, booked: false, checked: false },
        { name: "I8", price: 75000, booked: false, checked: false },
        { name: "I9", price: 75000, booked: false, checked: false },
        { name: "I10", price: 75000, booked: false, checked: false },
        { name: "I11", price: 75000, booked: false, checked: false },
        { name: "I12", price: 75000, booked: false, checked: false },
      ],
    },
    {
      row: "J",
      seats: [
        { name: "J1", price: 75000, booked: false, checked: false },
        { name: "J2", price: 75000, booked: false, checked: false },
        { name: "J3", price: 75000, booked: false, checked: false },
        { name: "J4", price: 75000, booked: false, checked: false },
        { name: "J5", price: 75000, booked: false, checked: false },
        { name: "J6", price: 75000, booked: false, checked: false },
        { name: "J7", price: 75000, booked: false, checked: false },
        { name: "J8", price: 75000, booked: false, checked: false },
        { name: "J9", price: 75000, booked: false, checked: false },
        { name: "J10", price: 75000, booked: false, checked: false },
        { name: "J11", price: 75000, booked: false, checked: false },
        { name: "J12", price: 75000, booked: false, checked: false },
      ],
    },
  ],
  chaiting: [],
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case "selectChair": {
      const index = state.chaiting.findIndex(
        (item) => item.name === action.ticketa.ticketa.name
      );

      if (index === -1) {
        const newChaiting = [...state.chaiting, { ...action.ticketa.ticketa }];
        return { ...state, chaiting: newChaiting };
      }else {
        const cloneChair = [...state.chaiting];
        cloneChair.splice(index,1);
        return { ...state ,chaiting:cloneChair};
      }
      
    }
    case "changeBooked": {
      const cloneTickets = [...state.tickets];
      const index = cloneTickets.findIndex(
        (ticket) => ticket.row === action.ticketa.row
      );
      const indexFound = cloneTickets[index].seats.findIndex(
        (seat) => seat.name === action.ticketa.ticketa.name
      );
      cloneTickets[index].seats[indexFound].booked = !cloneTickets[index].seats[indexFound].booked;
      return { ...state, tickets: cloneTickets };
    }
    case "removeItem": {
      const newChaiting = state.chaiting.filter(
        (item) => item.name !== action.item
      );
      return { ...state, chaiting: newChaiting };
      // console.log(chaiting);
    }
    // case "Clear":{
    //   // console.log("clear")
    //   // return {...state,chaiting:[]}
    // }
    case "Disable": {
      const cloneTicketss = [...state.tickets];
      for (let i = 0; i < action.chaiting.length; i++) {
        const indexRow = cloneTicketss.findIndex((item) => {
          return item.row === action.chaiting[i].name.substr(0, 1);
        });
        if (indexRow !== -1) {
          const indexItem = cloneTicketss[indexRow].seats.findIndex((item) => {
            return item.name === action.chaiting[i].name;
          });
          if (indexItem !== -1) {
            cloneTicketss[indexRow].seats[indexItem].checked = true;
            // cloneTicketss[indexRow].seats[indexItem].booked = false;
          }
        }
      }
      return { ...state, tickets: cloneTicketss, chaiting: [] };

      // console.log(cloneTicketss);
      // const index = cloneTicketss.findIndex(
      //   (ticket) => ticket.tickets.row === action.tickets.tickets.row
      // );
      // console.log(index);
      // // console.log(ticket.row);
      // console.log(action.tickets.row);
      // const indexFound = cloneTicketss[index].seats.findIndex(
      //   (seat) => seat.name === action.tickets.seats.name
      // );
      // cloneTicketss[index].seats[indexFound].checked = true;
      // return { ...state, tickets: cloneTicketss };
    }
    default:
      return state;
  }
};

export default cartReducer;

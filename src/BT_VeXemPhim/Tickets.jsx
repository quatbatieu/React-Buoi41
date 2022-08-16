import React from "react";
import SeatList from "./SeatList";
import SeatDetails from "./SeatDetails";
import scss from "./style.module.scss";

const Tickets = () => {
  return (
    <div className={scss.container}>
      <h1 className="text-center text-primary">ĐẶT VÉ XEM PHIM</h1>

      <SeatList />

      <SeatDetails />
    </div>
  );
};

export default Tickets;

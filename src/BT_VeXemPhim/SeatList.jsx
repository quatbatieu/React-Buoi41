import React from "react";
import { useSelector, useDispatch } from "react-redux";
import scss from "./style.module.scss";
import cn from "classnames";

const SeatList = () => {
  const { tickets } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleSelect = (ticketa) => {
    console.log("ticketa=>>", ticketa);
    dispatch({ type: "selectChair", ticketa });
    dispatch({ type: "changeBooked", ticketa });
  };

  return (
    <div className="container">
      <div className={scss.col2}>
        <h2 className="text-center">Màn hình</h2>
        <div className="text-center">
          {tickets.map((ticket) => {
            return (
              <div key={ticket.row}>
                {ticket.seats.map((ticketa) => {
                  let ticketing =
                    ticketa.booked === true ? `${scss.chairing}` : "";
                  let ticketb =
                    ticketa.checked === true ? `${scss.chaired}` : "";
                  return (
                    <button
                      key={ticketa.name}
                      disabled={ticketa.checked}
                      className={`${scss.chair} ${ticketing} ${ticketb}`}
                      onClick={() => handleSelect({ ticketa, row: ticket.row })}
                    >
                      {ticketa.name}
                    </button>
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default SeatList;

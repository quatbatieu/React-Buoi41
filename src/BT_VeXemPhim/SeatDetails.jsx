import React from "react";
import scss from "./style.module.scss";
import { Button } from "./styles";
import { useSelector, useDispatch } from "react-redux";

const SeatDetails = () => {
  const { chaiting } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const handleRemove = (item) => {
    dispatch({ type: "removeItem", item });
  };
  const handleClear = (chaiting) => {
    dispatch({ type: "Disable", chaiting });
    // dispatch ({type : "Clear", chaiting})
  };
  return (
    <div className="container">
      <div className={scss.col1}>
        <h2>Danh sách ghế đã chọn</h2>
        <br />
        <br />
        <div className={scss.row}>
          <div className={scss.square}></div>
          <h3>ghế đã đặt</h3>
        </div>
        <div className={scss.row}>
          <div className={scss.colorone}></div>
          <h3>ghế đang chọn</h3>
        </div>
        <div className={scss.row}>
          <div className={scss.colortwo}></div>
          <h3>ghế chưa đặt</h3>
        </div>
        <br />
        <br />
        <table className="table">
          <thead>
            <tr>
              <th>Số ghế</th>
              <th>Giá</th>
              <th>Bỏ chọn</th>
            </tr>
          </thead>
          <tbody>
            {chaiting.map((item) => {
              return (
                <tr key={item.name}>
                  <th>{item.name}</th>
                  <th>{item.price}</th>
                  <th>
                    <button onClick={() => handleRemove(item.name)}>X</button>
                  </th>
                </tr>
              );
            })}
            <tr>
              <th>Tổng tiền</th>
              <th>
                {chaiting
                  .reduce((total, item) => {
                    return (total += item.price);
                  }, 0)
                  .toLocaleString()}
              </th>
            </tr>
          </tbody>
        </table>
        <br />
        <br />
        <Button variant="primary" onClick={() => handleClear(chaiting)}>
          ĐẶT VÉ
        </Button>
        {/* <button onClick={() =>handleClear(chaiting)}>ĐẶT VÉ</button> */}
      </div>
    </div>
  );
};

export default SeatDetails;

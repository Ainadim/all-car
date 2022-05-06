import React from "react";
import "./CarsBuyCart.css";

const CarsBuyCart = (props) => {
  const carAddCart = props.carAddCart;
  const priceIns = 0;
  const totalBudget = Math.ceil(
    carAddCart.reduce(
      (sum, carName) => sum + carName.stock_market_cap,
      priceIns
    )
  );
  return (
    <div className="m-5">
      <h5>Cart List:</h5>
      <p style={{ backgroundColor: "#2E52D2", color: "#fff", padding: "5px" }}>
        You added {carAddCart.length} Company
      </p>

      <div className="divUl">
        <ul
          className="d-flex"
          style={{ backgroundColor: "#C1313E", color: "#fff" }}
        >
          <li>Company Name</li>
          <li>Market Value</li>
        </ul>
        {carAddCart.map((carName) => (
          <ul className="d-flex">
            <li>{carName.company_name}</li> <li>{carName.stock_market_cap}</li>
          </ul>
        ))}
        <ul
          className="d-flex"
          style={{ backgroundColor: "#2E52D2", color: "#fff" }}
        >
          <li>
            <h6>Total Value</h6>
          </li>
          <li>
            <h6>${totalBudget}</h6>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default CarsBuyCart;

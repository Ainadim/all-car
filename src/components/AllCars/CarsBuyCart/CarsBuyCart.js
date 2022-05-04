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
      <p>You added {carAddCart.length} Company</p>
      <p>You need total ${totalBudget} million to buy</p>
      <div className="divUl">
        <ul className="d-flex">
          <li>Company Name</li>
          <li>Market Value</li>
        </ul>
        {carAddCart.map((carName) => (
          <ul className="d-flex">
            <li>{carName.company_name}</li> <li>{carName.stock_market_cap}</li>
          </ul>
        ))}
        <ul className="d-flex">
          <li>You need total</li>
          <li>${totalBudget}</li>
        </ul>
      </div>
    </div>
  );
};

export default CarsBuyCart;

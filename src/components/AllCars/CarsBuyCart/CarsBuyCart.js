import React from "react";

const CarsBuyCart = (props) => {
  const carAddCart = props.carAddCart;
  return (
    <div>
      <h5>Cart List:</h5>
      <h5>You add: {carAddCart.length}</h5>
    </div>
  );
};

export default CarsBuyCart;

import React from "react";

const Cars = (props) => {
  const { company_name, ceo_full_name, stock_market_cap, country } =
    props.allcar;
  return (
    <div>
      {<h1>Company Name: {company_name}</h1>}
      <h3> CEO: {ceo_full_name}</h3>
      <h3> Country: {country}</h3>
      <h3> Market Value: {stock_market_cap}</h3>
    </div>
  );
};

export default Cars;

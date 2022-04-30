import React from "react";
import { Button, Card } from "react-bootstrap";

const Cars = (props) => {
  const { company_name, ceo_full_name, stock_market_cap, country, images } =
    props.allcar;
  return (
    <div>
      <div>
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={images} />
          <Card.Body>
            <Card.Title>{company_name}</Card.Title>
            <Card.Text>CEO- {ceo_full_name}</Card.Text>
            <Card.Text>Market Value- {stock_market_cap}</Card.Text>
            <Card.Text>Country- {country}</Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default Cars;

import React from "react";
import { Button, Card } from "react-bootstrap";
import { addToDo, removeFromDb } from "../../fakeDB/storage";
import "./Cars.style.css";

const Cars = (props) => {
  const { company_name, ceo_full_name, stock_market_cap, country, images } =
    props.allcar;
  const handleAddCar = (id) => {
    addToDo(id);
    console.log(id);
  };

  const handleRomvePlayer = (id) => {
    removeFromDb(id);
    console.log(id);
  };

  // const handleAddCar = props.handleAddCar;

  return (
    <div>
      <Card className="car-box pt-5 pb-2" style={{ width: "300px" }}>
        <Card.Img variant="top" src={images} />
        <Card.Body>
          <Card.Title>{company_name}</Card.Title>
          <Card.Text>CEO- {ceo_full_name}</Card.Text>
          <Card.Text>
            Market Value - {stock_market_cap} MIllion Dollar
          </Card.Text>
          <Card.Text>Country- {country}</Card.Text>
          <Button
            onClick={() => handleAddCar(company_name)}
            variant="primary"
            style={{ marginRight: "10px" }}
          >
            Add to cart
          </Button>
          <Button
            onClick={() => handleRomvePlayer(company_name)}
            variant="danger"
          >
            Remove
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Cars;

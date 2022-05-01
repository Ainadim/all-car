import React, { useEffect, useState } from "react";
import Cars from "../Cars/Cars";
import AllData from "../../FakeData/MOCK_DATA.json";
import "./AllCars.style.css";
import CarsBuyCart from "./CarsBuyCart/CarsBuyCart";

const AllCars = () => {
  const [cars, setCars] = useState([]);
  const [addCars, setAddCars] = useState([]);

  useEffect(() => {
    setCars(AllData);
  }, []);

  const handleAddCar = (allCar) => {
    const newCar = [...addCars, allCar];
    setAddCars(newCar);
  };

  return (
    <div className="container">
      <h1>All Cars company value</h1>
      <div style={{ display: "flex" }}>
        <div className="car-container">
          {cars.map((carsDetails) => (
            <Cars
              allcar={carsDetails}
              key={carsDetails.id}
              handleAddCar={handleAddCar}
            />
          ))}
        </div>
        <div>
          <CarsBuyCart carAddCart={addCars} />
        </div>
      </div>
    </div>
  );
};

export default AllCars;

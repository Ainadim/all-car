import React, { useEffect, useState } from "react";
import Cars from "../Cars/Cars";
import AllData from "../../FakeData/MOCK_DATA.json";

const AllCars = () => {
  const [cars, setCars] = useState([]);
  useEffect(() => {
    setCars(AllData);
  }, []);
  console.log(cars);
  return (
    <div>
      <h1>All Cars company value</h1>
      <div>
        {cars.map((carsDetails) => (
          <Cars allcar={carsDetails} />
        ))}
      </div>
    </div>
  );
};

export default AllCars;

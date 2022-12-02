import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Context/AuthProvider";
import Loader from "../Loader/Loader";
import Modal from "../Modal/Modal";
import LuxuriousCar from "./luxuriousCar";

const Luxurious = () => {
  let [luxurious, setLuxurious] = useState([]);
  const [selectedCar, setSelectedCar] = useState({});

  let [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:5000/luxurious`)
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
        setLuxurious(data);
      });
  }, []);

  return (
    <div>
      <div className="title">
        <h1 className="text-4xl text-center mt-16 text-orange-400">
          Luxurious Used Car
        </h1>
      </div>
      {loading && <Loader></Loader>}

      <div className="grid lg:grid-cols-2 grid-cols-1 mt-20   ">
        {luxurious.map((car) => (
          <LuxuriousCar
            key={car.id}
            car={car}
            setSelectedCar={setSelectedCar}
          ></LuxuriousCar>
        ))}
        <Modal
          setSelectedCar={setSelectedCar}
          selectedCar={selectedCar}
        ></Modal>
      </div>
    </div>
  );
};

export default Luxurious;

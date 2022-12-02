import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Context/AuthProvider";
import Loader from "../Loader/Loader";
import Modal from "../Modal/Modal";
import FamilyCar from "./FamilyCar";

const Family = () => {
  const [familyCar, setFamilyCar] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCar, setSelectedCar] = useState({});

  useEffect(() => {
    fetch(`http://localhost:5000/family`)
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
        setFamilyCar(data);
      });
  }, []);

  return (
    <div>
      <div className="title">
        <h1 className="text-4xl text-center mt-16 text-orange-400">
          Family Used Car
        </h1>
      </div>
      ;{loading && <Loader></Loader>}
      <div className="grid lg:grid-cols-2 grid-cols-1 mt-20">
        {familyCar.map((car) => (
          <>
            <FamilyCar
              key={car.id}
              car={car}
              setSelectedCar={setSelectedCar}
            ></FamilyCar>
          </>
        ))}
        <Modal
          setSelectedCar={setSelectedCar}
          selectedCar={selectedCar}
        ></Modal>
      </div>
    </div>
  );
};

export default Family;

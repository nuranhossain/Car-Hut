import React, { useContext, useEffect, useState } from "react";
import Modal from "../Modal/Modal";
import { useQuery } from "@tanstack/react-query";
import CheapCar from "./CheapCar";
import { AuthContext } from "../Context/AuthProvider";
import Loader from "../Loader/Loader";

const Cheap = () => {
  let [cheapCar, setCheapCar] = useState([]);
  const [selectedCar, setSelectedCar] = useState({});
  const { loading } = useContext(AuthContext);

  const { data: cheap = [], isLoading } = useQuery({
    queryKey: [`cheap`],
    queryFn: () =>
      fetch(`http://localhost:5000/cheap`).then((res) => res.json()),
  });

  // useEffect(() => {
  //   fetch(`http://localhost:5000/cheap`)
  //     .then((res) => res.json())
  //     .then((data) => setCheap(data));
  // }, []);

  return (
    <div>
      <div className="title">
        <h1 className="text-4xl text-center mt-16 text-orange-400">
          Cheap Used Car
        </h1>
      </div>

      {isLoading && <Loader></Loader>}
      <div className="grid lg:grid-cols-2 grid-cols-1 mt-20">
        {cheap.map((car) => (
          <CheapCar
            key={car.id}
            car={car}
            setSelectedCar={setSelectedCar}
          ></CheapCar>
        ))}
        <Modal
          setSelectedCar={setSelectedCar}
          selectedCar={selectedCar}
        ></Modal>
      </div>
    </div>
  );
};

export default Cheap;

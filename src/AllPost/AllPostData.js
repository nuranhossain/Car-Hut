import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Modal from "../Modal/Modal";
import AllPost from "./AllPost";

const AllPostData = () => {
  const [allCar, setAllCar] = useState([]);
  const [selectedCar, setSelectedCar] = useState([]);
  useEffect(() => {
    fetch(`https://server-sepia-ten.vercel.app/allcars`)
      .then((res) => res.json())
      .then((data) => setAllCar(data));
  }, []);
  return (
    <div className="mt-20 grid lg:grid-cols-2 grid-cols-1 mx-[100px] justify-between">
      {allCar.map((car) => (
        <AllPost setSelectedCar={setSelectedCar} car={car}></AllPost>
      ))}
      <Modal setSelectedCar={setSelectedCar} selectedCar={selectedCar}></Modal>
    </div>
  );
};

export default AllPostData;

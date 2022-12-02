import React from "react";
import { Link } from "react-router-dom";
import car1 from "../assets/car/car1.jpg";
import car2 from "../assets/car/car2.jpg";
import car3 from "../assets/car/car3.jpg";
import Modal from "../Modal/Modal";
import Card from "./Card";

let category = [
  {
    id: 1,
    title: "Family car",
    des: "Chose your Family car here",
    img: car1,
    sr: "/family",
  },
  {
    id: 2,
    title: "Luxurious car",
    des: "Chose your Luxurious car here",
    img: car2,
    sr: "/luxurious",
  },
  {
    id: 3,
    title: "Cheap car",
    des: "Chose your Cheap car here",
    img: car3,
    sr: "/cheap",
  },
];

const Category = () => {
  return (
    <div>
      <div className="title">
        <h1 className="text-4xl text-center my-20">Chose Your Car</h1>
      </div>
      <div className="grid lg:grid-cols-3  mb-44">
        {category.map((x) => (
          <Card x={x}></Card>
        ))}
      </div>
    </div>
  );
};

export default Category;

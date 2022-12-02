import React from "react";
import car4 from "../assets/car/car4.jpg";

const Details = () => {
  return (
    <div>
      <div className="hero bg-white shadow-xl top-shadow-lg py-20 my-40">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src={car4} className="max-w-sm rounded-lg shadow-2xl" />
          <div>
            <h1 className="text-5xl font-bold">
              You Can Trust Your Car With Us
            </h1>
            <p className="py-6">
              Get your desire car at good price. A lot of potential customer are
              selling their car here.So, grab your car before anyone grab your
              favorite car
            </p>
            <button className="btn btn-warning px-9">Buy</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;

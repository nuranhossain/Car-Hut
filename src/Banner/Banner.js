import React from "react";
import car4 from "../assets/car/car4.jpg";

const Banner = () => {
  return (
    <div>
      <div
        className="hero min-h-screen"
        style={{ backgroundImage: `url(${car4})` }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-5xl">
            <h1 className="mb-5 text-8xl font-bold">
              Buy your car here any time anywhere At Good Price
            </h1>
            <p className="mb-5">
              You can buyand sell your car here here from anywhere anytime et a
              id nisi.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;

import React, { useContext } from "react";
import { AuthContext } from "../Context/AuthProvider";
import Modal from "../Modal/Modal";

const LuxuriousCar = ({ car, setSelectedCar }) => {
  const { name, img, des, price, post, email, carName, location } = car;
  const { loading } = useContext(AuthContext);

  return (
    <div className="">
      <div className="card card-side bg-base-100 shadow-xl lg:w-[650px] mx-auto gap-10 lg:mb-10 mb-7">
        <figure>
          <img src={img} alt="Movie" className="w-[350px] h-full rounded" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{carName}</h2>
          <p>{des}</p>
          <h1 className="text-xl">${price}</h1>
          <div className="user border rounded pl-3 py-2">
            <span className="text small">Author: </span>{" "}
            <span className="text-blue-400 font-bold">{name}</span>
            <p>Email: {email}</p>
            <p>Location: {location}</p>
            <p>{post}</p>
          </div>
          <div className="card-actions justify-end">
            <label
              onClick={() => setSelectedCar(car)}
              className="btn btn-warning text-white px-7"
              htmlFor="booking-modal"
            >
              Buy
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LuxuriousCar;

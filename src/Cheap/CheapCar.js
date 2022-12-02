import React, { useContext, useState } from "react";
import { AuthContext } from "../Context/AuthProvider";
import Modal from "../Modal/Modal";

const CheapCar = ({ car, setSelectedCar }) => {
  const { name, img, des, price, post, email, carName, location, verify } = car;
  let { loading } = useContext(AuthContext);
  if (loading) {
    <h1 className="text-5xl text-center">Loading</h1>;
  }

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
          <div className="user border rounded pl-3 py-2 shadow-lg">
            <p className="text-center py-3 text-gray-600 font-bold">
              Seller Info
            </p>
            <div className="flex justify-between">
              <div>
                <span className="text small">Author: </span>{" "}
                <span className="text-blue-400 font-bold">{name}</span>
              </div>
              {verify && (
                <div className="mr-2">
                  {" "}
                  <i class="fa-solid fa-check mr-2 text-orange-500"></i>
                  <span>Verified</span>
                </div>
              )}
            </div>
            <p>
              Email: <span className="font-bold">{email}</span>
            </p>
            <p>
              Location: <span className="font-bold">{location}</span>
            </p>
            <p>Date: {post}</p>
          </div>
          <div className="card-actions justify-end">
            <label
              onClick={() => setSelectedCar(car)}
              className="Btn btn-warning px-5 py-2 rounded text-white"
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

export default CheapCar;

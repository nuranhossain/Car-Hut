import React, { useContext, useState } from "react";
import { AuthContext } from "../Context/AuthProvider";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";

const Modal = ({ selectedCar, setSelectedCar }) => {
  const { user } = useContext(AuthContext);
  const { price, name, carName, email, location, id, img } = selectedCar;
  const [value, setValue] = useState();
  const date = new Date();

  const handleBuyItems = (event) => {
    event.preventDefault();
    const form = event.target;
    const carName = form.carName.value;
    const carPrice = form.price.value;
    const buyerName = form.buyerName.value;
    const buyerEmail = form.buyerEmail.value;
    const sallerEmail = form.sallerEmail.value;
    const sallerName = form.sallerName.value;
    const sallerLocation = form.sallerLocation.value;
    const meetLocation = form.meetLocation.value;
    const sallerPhone = value;

    const userList = {
      carName,
      carPrice,
      buyerName,
      buyerEmail,
      sallerEmail,
      img,
      meetLocation,
      sallerPhone,
      sallerName,
      sallerLocation,
    };

    fetch(`http://localhost:5000/buying`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(userList),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          setSelectedCar({});
          toast("Orders Confirmed");
        }
      });
  };

  return (
    <>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="booking-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <form onSubmit={handleBuyItems} action="">
            <div className="flex justify-between">
              <div className="price">
                <label className="label">
                  <span className="label-text">Product Name</span>
                </label>
                <input
                  type="text"
                  name="carName"
                  value={carName}
                  className="input input-bordered w-full max-w-xs"
                />
              </div>
              <div className="price">
                <label className="label">
                  <span className="label-text">Price</span>
                </label>
                <input
                  name="price"
                  type="text"
                  value={`${price}`}
                  className="input input-bordered w-full max-w-xs"
                />
              </div>
            </div>
            <div className="flex justify-between">
              <div className="price">
                <label className="label">
                  <span className="label-text">Buyer Name</span>
                </label>
                <input
                  type="text"
                  name="buyerName"
                  value={user?.displayName}
                  className="input input-bordered w-full max-w-xs"
                />
              </div>
              <div className="price">
                <label className="label">
                  <span className="label-text">Buyer Email</span>
                </label>
                <input
                  name="buyerEmail"
                  type="text"
                  value={user?.email}
                  className="input input-bordered w-full max-w-xs"
                />
              </div>
            </div>
            <div className="flex justify-between">
              <div className="price">
                <label className="label">
                  <span className="label-text">Seller Name</span>
                </label>
                <input
                  type="text"
                  name="sallerName"
                  value={`${name}`}
                  className="input input-bordered w-full max-w-xs"
                />
              </div>
              <div className="price">
                <label className="label">
                  <span className="label-text">Seller Email</span>
                </label>
                <input
                  type="text"
                  name="sallerEmail"
                  value={email}
                  className="input input-bordered w-full max-w-xs"
                />
              </div>
            </div>
            <div className="flex justify-between">
              <div className="location">
                <label className="label">
                  <span className="label-text">Seller Location</span>
                </label>
                <input
                  name="sallerLocation"
                  type="text"
                  defaultValue={location}
                  placeholder="Location To Meet"
                  className="input input-bordered w-full max-w-xs"
                />
              </div>
              <div className="location">
                <label className="label">
                  <span className="label-text">Location</span>
                </label>
                <input
                  type="text"
                  name="meetLocation"
                  required
                  placeholder="Location To Meet"
                  className="input input-bordered w-full max-w-xs"
                />
              </div>
            </div>
            <div className="phone">
              <label className="label">
                <span className="label-text">Seller Phone</span>
              </label>

              <PhoneInput
                placeholder="Enter phone number"
                value={value}
                country="US"
                required
                className="input input-bordered w-full max-w-xs"
                onChange={setValue}
              />
            </div>
            {user?.email ? (
              <>
                <button className="btn btn-outline mt-5 w-full" type="submit">
                  Submit
                </button>
              </>
            ) : (
              <>
                <p className="text-center mt-5">
                  You are not Logged in,please <span className="">login</span>
                </p>
                <Link className="btn btn-outline mt-2 w-full" to="/login">
                  Login
                </Link>
              </>
            )}
          </form>
        </div>
      </div>
    </>
  );
};

export default Modal;

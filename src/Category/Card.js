import React from "react";
import { Link } from "react-router-dom";
import Modal from "../Modal/Modal";

const Card = ({ x }) => {
  let { sr, img, title, des } = x;
  return (
    <div className="">
      <div className="card card-compact w-96 bg-base-100 shadow-xl mx-auto">
        <figure>
          <img src={img} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title} </h2>
          <p>{des}</p>
          <div className="card-actions justify-end">
            <Link
              className="Btn btn-warning px-5 py-2 rounded text-white"
              to={sr}
            >
              View More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;

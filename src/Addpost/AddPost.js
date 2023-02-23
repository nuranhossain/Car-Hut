import { toast } from "react-hot-toast";
import React, { useContext } from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthProvider";
import { GoogleAuthProvider } from "firebase/auth";

const AddPost = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  let currentDate = new Date().toJSON().slice(0, 10);

  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();
  const [data, setData] = useState("");

  let handlePost = (data) => {
    addNewPost(
      data.carName,
      data.des,
      data.img,
      data.name,
      data.location,
      data.post,
      data.typ,
      data.price,
      data.email
    );
    console.log(data);
  };

  const addNewPost = (
    carName,
    des,
    img,
    name,
    location,
    post,
    typ,
    price,
    email
  ) => {
    const allPost = {
      carName,
      des,
      img,
      name,
      location,
      post,
      typ,
      price,
      email,
    };

    fetch(`https://server-sepia-ten.vercel.app/addpost`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(allPost),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          toast("Post Added completed");
          navigate("/");
        }
      });
  };

  return (
    <div>
      <div className="flex justify-center items-center shadow-lg lg:w-[420px] mx-auto lg:mt-[150px] mt-[70px] rounded-md">
        <form className="p-5" onSubmit={handleSubmit(handlePost)}>
          <div className="title text-center">
            <h1 className="text-4xl my-5">Add post</h1>
          </div>
          <div>
            <input
              type="text"
              name="carName"
              {...register("carName")}
              placeholder="Car Name"
              className="input input-bordered input-warning w-full max-w-xs mb-5 w-[450px]"
            />
          </div>
          <div>
            <input
              type="text"
              name="des"
              {...register("des")}
              placeholder="Description"
              className="input input-bordered input-warning w-full max-w-xs mb-5 w-[450px]"
            />
          </div>
          <div>
            <input
              name="img"
              {...register("img", {
                required: "Password is required",
              })}
              placeholder="Image URL"
              type="text"
              className="input input-bordered input-warning w-full max-w-xs"
            />
            {errors.password && <p>{errors?.passowrd?.message}</p>}
          </div>

          <div>
            <input
              {...register("price", {
                required: "Price is required",
              })}
              placeholder="Price"
              type="text"
              className="input input-bordered input-warning w-full max-w-xs mt-5"
            />
            {errors.password && <p>{errors?.passowrd?.message}</p>}
          </div>
          <div>
            <input
              {...register("name", {
                required: "Price is required",
              })}
              placeholder="Name"
              type="text"
              className="input input-bordered input-warning w-full max-w-xs mt-5"
            />
            {errors.password && <p>{errors?.passowrd?.message}</p>}
          </div>
          <div>
            <input
              {...register("email", {
                required: "Email is required",
              })}
              value={user.email}
              type="text"
              className="input input-bordered input-warning w-full max-w-xs mt-5"
            />
            {errors.password && <p>{errors?.passowrd?.message}</p>}
          </div>
          <div>
            <input
              {...register("location", {
                required: "location is required",
              })}
              placeholder="Your Location"
              type="text"
              className="input input-bordered input-warning w-full max-w-xs mt-5"
            />
            {errors.password && <p>{errors?.passowrd?.message}</p>}
          </div>

          <div>
            <input
              {...register("post", {})}
              value={currentDate}
              type="text"
              className="input input-bordered input-warning w-full max-w-xs mt-5"
            />
            {errors.password && <p>{errors?.passowrd?.message}</p>}
          </div>

          <div className="mt-5">
            <select
              {...register("typ")}
              required
              className="select select-bordered w-full max-w-xs"
            >
              <option disabled selected>
                Select Your Category
              </option>
              <option value="family">Family</option>
              <option value="cheap">Cheap</option>
              <option value="luxurious">Luxurious</option>
            </select>
          </div>
          <input
            className="mt-5 btn btn-warning text-white w-full"
            type="submit"
          />
        </form>
      </div>
    </div>
  );
};

export default AddPost;

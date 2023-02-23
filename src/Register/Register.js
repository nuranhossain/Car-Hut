import { toast } from "react-hot-toast";
import React, { useContext } from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthProvider";
import { GoogleAuthProvider } from "firebase/auth";

const Register = () => {
  const { createUser, updateUser, providerLogin } = useContext(AuthContext);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();
  const [data, setData] = useState("");

  let handleRegister = (data) => {
    createUser(data.email, data.password)
      .then((result) => {
        const user = result.user;
        const userInfo = {
          displayName: data.name,
        };
        toast("Registration completed");
        updateUser(userInfo).then(() => {
          saveUser(data.name, data.email, data.typ);
          navigate("/");
        });
      })
      .catch((error) => {});
  };

  const saveUser = (name, email, typ) => {
    const user = { name, email, typ };
    fetch(`https://server-sepia-ten.vercel.app/users`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };

  let googleProvider = new GoogleAuthProvider();

  let GoogleSignIn = () => {
    providerLogin(googleProvider).then((result) => {
      let user = result.user;
      const currentUser = {
        email: user.email,
      };
      navigate("/");
    });
  };

  return (
    <div className="flex justify-center items-center shadow-lg lg:w-[420px] mx-auto lg:mt-[150px] mt-[70px] rounded-md">
      <form className="p-5" onSubmit={handleSubmit(handleRegister)}>
        <div className="title text-center">
          <h1 className="text-4xl my-5">Register</h1>
        </div>
        <div>
          <input
            type="text"
            name="name"
            {...register("name")}
            placeholder="Your Name"
            className="input input-bordered input-warning w-full max-w-xs mb-5 w-[450px]"
          />
        </div>
        <div>
          <input
            type="email"
            name="email"
            {...register("email")}
            placeholder="Email"
            className="input input-bordered input-warning w-full max-w-xs mb-5 w-[450px]"
          />
        </div>
        <div>
          <input
            name="password"
            {...register("password", {
              required: "Password is required",
              minLength: { value: 6, message: "Password must be 6" },
            })}
            placeholder="Password"
            type="password"
            className="input input-bordered input-warning w-full max-w-xs"
          />
          {errors.password && <p>{errors?.passowrd?.message}</p>}
        </div>
        <div className="mt-5">
          <select className="select select-bordered w-full max-w-xs">
            <option disabled selected>
              Are you a buyer or seller
            </option>
            <option {...register("typ")} value="buyer">
              Buyer
            </option>
            <option {...register("typ")} value="seller">
              Seller
            </option>
          </select>
        </div>
        <input
          className="mt-5 btn btn-warning text-white w-full"
          type="submit"
        />
        <div className="description flex text-center justify-center">
          <p>Already have account?</p>
          <Link to="/login" className="text-warning ml-2">
            Login
          </Link>
        </div>
        <div>
          <Link onClick={GoogleSignIn} className="btn w-full mt-5">
            Google
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Register;

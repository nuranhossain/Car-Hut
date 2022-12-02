import { GoogleAuthProvider } from "firebase/auth";
import React, { useContext } from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthProvider";

const Login = () => {
  const { signIn, providerLogin } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const from = location.state?.from?.pathname || "/";

  const {
    register,
    handleSubmit,
    required,
    formState: { errors },
  } = useForm();
  const [data, setData] = useState("");

  let handleLogin = (data) => {
    signIn(data.email, data.password)
      .then((result) => {
        const user = result.user;
        navigate(from, { replace: true });
      })
      .catch((err) => console.log("login err", err));
  };

  let googleProvider = new GoogleAuthProvider();

  // google login

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
      <form className="p-5" onSubmit={handleSubmit(handleLogin)}>
        <div className="title text-center">
          <h1 className="text-4xl my-5">Login</h1>
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
          {errors.password && <p>{errors.passowrd?.message}</p>}
        </div>
        <input
          className="mt-5 btn btn-warning text-white w-full"
          type="submit"
        />
        <div className="description flex text-center justify-center">
          <p>Don't have account?</p>
          <Link to="/register" className="text-warning ml-2">
            Register
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

export default Login;

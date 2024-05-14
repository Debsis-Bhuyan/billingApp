import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Logo from "./Logo";
import useStore from "../store";
import axios from "axios";

const Signin = () => {
  const signIn = useStore((state) => state.signIn);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate=useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(email, password);
    const url = "http://localhost:5000/api/user/login";
    try {
      const response = await axios.post(url, {
        email,
        password,
      });
      // Handle success, e.g., show a success message to the user
      console.log("User registered successfully:", response.data);
      setEmail("");
      setPassword("");
      if (response.data.success) {
        console.log(response.data.user);
        localStorage.setItem("userInfo", JSON.stringify(response.data));
        signIn(response.data);

        setTimeout(() => {
          const userData = localStorage.getItem("userInfo");
          console.log(userData.user);
          console.log(userData.token);
          navigate("/dashboard");
        }, 2000);
      }
      return response.data; // Return any data you want to use in your component
    } catch (error) {
      // Handle error, e.g., show an error message to the user
      console.error("Error registering user:", error);
      throw error; // Throw the error for further handling in the component
    }
  };

  return (
    <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
      <div className="w-full p-6 m-auto bg-white rounded-md shadow-md lg:max-w-xl">
        <div className="flex items-center justify-center my-6">
          <Logo />
        </div>
        <h1 className="text-2xl font-semibold text-center text-gray-700">
          Sign In
        </h1>
        <form className="mt-6" onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              className="mt-1 p-2 w-full border rounded-md focus:ring focus:ring-blue-300"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              className="mt-1 p-2 w-full border rounded-md focus:ring focus:ring-blue-300"
              placeholder="Enter your password"
            />
          </div>

          <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
          >
            Sign in
          </button>
        </form>
        <p className="mt-4 text-center text-gray-600">
          Create an account?
          <Link to="/auth/register" className="text-blue-500 hover:underline">
            Sign Up
          </Link>
        </p>
        <p className="mt-4 text-center text-gray-600">
          <Link to="/auth/forget" className="text-blue-500 hover:underline">
            Forget password
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signin;

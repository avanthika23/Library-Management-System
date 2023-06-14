import React from "react";
import bg from "../assets/loginbg.jpg";
import google from "../assets/google.png";
import git from "../assets/github.png";
import face from "../assets/facebook.png";
import Avan from "../assets/Avans.png";
import "./animate.css";
import { useNavigate } from "react-router-dom";
export default function Loginpage() {
  const Navigate = useNavigate();
  return (
    <div className="h-screen flex justify-start items-start ">
      <div
        className="h-full  bg-white max-sm:w-full  max-md:w-full w-[40vw] " id="load2"
      >
        <div className="absolute top-0 left-0 flex justify-center items-center">
          <img className="w-10 h-10 m-5" src={Avan} />
          <p className="font-HelloBranch text-lg text-center">AK Store</p>
        </div>

        <div className="flex flex-col  h-full items-center justify-center">
          <h1 className="font-HelloBranch text-4xl ">Welcome Back!</h1>
          <h1 className="font-mono text-sm p-2">
            Some books leave us free and some books make us free
          </h1>
          <div className="grid font-medium font-mono  gap-3">
            <label className="text-lg">Email</label>
            <input
              className="text-lg border border-black-2 border-black px-40 py-2 font-mono"
              placeholder="Enter Your Email"
            />
            <label className="text-lg">Password</label>
            <input
              className="text-lg border border-black-2 border-black px-40 py-2 font-mono"
              placeholder="Enter Your Password"
            />
            <div className="flex justify-between">
              {" "}
              <div>
                <input type="checkbox" className="text-[10px]" /> Remember Me
              </div>{" "}
              <p>Forget Password</p>
            </div>
            <button
              className="px-40 py-2  bg-black text-white text-center text-lg shadow-md hover:scale-105 ease-in-out duration-100 mt-2"
              onClick={() => {
                Navigate("/Home", { replace: true });
              }}
            >
              Sign In
            </button>
            <div className="flex justify-evenly mt-10">
              <img className="w-11 h-11 hover:scale-110 duration-100 ease-in-out" src={google} />
              <img className="w-11 h-11 hover:scale-110 duration-100 ease-in-out" src={git} />
              <img className="w-11 h-11 hover:scale-x-110 duration-100 ease-in-out" src={face} />
            </div>
          </div>
          <p className="absolute bottom-0 mb-10">
            <span className="font-extralight text-gray-500">
              Dont have a Account ?{" "}
            </span>
            <span>Sign Up</span>
          </p>
        </div>
      </div>
      <div
        className="h-full  bg-slate-300 w-[60vw] max-sm:w-0 max-md:w-0"
        id="load"
      >
        <img className="h-full" src={bg} />
      </div>
    </div>
  );
}

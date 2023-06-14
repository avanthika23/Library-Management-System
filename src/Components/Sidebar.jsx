import React from "react";
import book from "../assets/book.png";
import Avan from "../assets/Avans.png";
import logout from "../assets/logout.png";
import { useNavigate } from "react-router-dom";
import star from "../assets/star.png";
export default function Sidebar() {
  const Navigate = useNavigate();
  return (
    <div className="h-full w-20 bg-[#efe5da] flex justify-center gap-3 items-center flex-col sticky">
      <div className="rounded-full bg-[#faf3e8] h-12 w-12 absolute top-0 left-0 m-4">
        <img src={Avan} />
      </div>
    
      <div className="rounded-full  border-2 border-gray-300 bg-[#faf3e8] h-12 w-12 ">
        <img src={book} />
      </div>
      <div className="rounded-full bg-[#faf3e8] h-12 w-12">
      <img src={book} />
      </div>
      <div className="rounded-full bg-[#faf3e8] h-12 w-12">
      <img src={book} />
      </div>
    
      <div
        className="rounded-full bg-[#faf3e8] h-12 w-12 absolute bottom-0 left-0 m-4 "
        onClick={(e) => {
          Navigate("../", { exact: true });
        }}
      >
        <img
          className="h-6 w-6  absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]"
          src={logout}
        />
      </div>
    </div>
  );
}

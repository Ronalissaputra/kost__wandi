import React from "react";
import { BsFillPersonFill } from "react-icons/bs";
import { LuHome } from "react-icons/lu";
import { useNavigate } from "react-router-dom";

const Startpage = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full min-h-screen flex items-center justify-center">
      <div className="w-[400px] grid grid-cols-1 gap-5 px-4">
        <div
          onClick={() => navigate("/login")}
          className="w-full flex items-center cursor-pointer h-20 px-2 bg-cyan-400 rounded-md"
        >
          <div className="flex w-full items-center justify-between">
            <p className="lg:text-[25px] text-2xl">Login sebagai penyewa</p>
            <BsFillPersonFill className="lg:text-[70px] text-3xl" />
          </div>
        </div>
        <div
          onClick={() => navigate("/login")}
          className="w-full flex cursor-pointer items-center h-20 px-2 bg-cyan-400 rounded-md"
        >
          <div className="flex w-full items-center justify-between">
            <p className="lg:text-[25px] text-2xl">Login sebagai pemilik</p>
            <LuHome className="lg:text-[60px] text-3xl" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Startpage;

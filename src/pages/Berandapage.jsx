import React from "react";
import Layout from "../layout/Layout";
import { kost__antang } from "../api/datakost__antang";
import { NavLink } from "react-router-dom";
import { AiTwotoneStar } from "react-icons/ai";

const Berandapage = () => {
  // console.table(kost__antang);

  return (
    <Layout>
      <div className="mt-10">
        <p className="text-3xl font-semibold my-4">Kost Daerah Antang</p>
        <div className="grid lg:grid-cols-4 grid-cols-1 gap-4">
          {kost__antang.map((kost, index) => (
            <NavLink
              key={index}
              to={`/detail/${kost.id}`}
              className="border-2 rounded-lg"
            >
              <img
                src={kost.img}
                alt=""
                className="w-full rounded-t-lg h-[200px]"
              />
              <div className="p-2">
                <p className="font-bold">{kost.title}</p>
                <p>{kost.host}</p>
                <p className="font-semibold">Harga - {kost.price} / Bulan</p>
                <div className="flex items-center space-x-2">
                  <AiTwotoneStar className="text-2xl text-yellow-400" />
                  <p>{kost.rate} Update hari ini</p>
                </div>
              </div>
            </NavLink>
          ))}
        </div>
      </div>
      <div className="border border-slate-300 my-5" />
      <div className="mt-10">
        <p className="text-3xl font-semibold my-4">Kost Daerah Perintis</p>
        <div className="grid lg:grid-cols-4 grid-cols-1 gap-4">
          {kost__antang.map((kost, index) => (
            <div className="border-2 rounded-lg">
              <img
                src={kost.img}
                alt=""
                className="w-full rounded-t-lg h-[200px]"
              />
              <div className="p-2">
                <p className="font-bold">{kost.title}</p>
                <p>{kost.host}</p>
                <p className="font-semibold">Harga - {kost.price} / Bulan</p>
                <p>{kost.rate} update hari ini</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Berandapage;

import React from "react";
import { useParams } from "react-router-dom";
import { kost__antang } from "../api/datakost__antang";
import Layout from "../layout/Layout";
import { ImLocation2 } from "react-icons/im";
import { Button } from "@chakra-ui/react";
import { PiToilet } from "react-icons/pi";
import { FaBed, FaChair, FaUniversity } from "react-icons/fa";
import { BsDoorClosedFill, BsKey } from "react-icons/bs";
import { FcElectricity } from "react-icons/fc";
import { RiMotorbikeFill } from "react-icons/ri";
import { BiRestaurant } from "react-icons/bi";
import { ImRoad } from "react-icons/im";
import { GiPerson } from "react-icons/gi";
import { AiTwotoneStar } from "react-icons/ai";

const Detailpage = () => {
  const { id } = useParams();
  const getById = (id) => {
    return kost__antang.find((item) => item.id === id);
  };

  const kostId = `${id}`;
  const kost = getById(kostId);

  return (
    <Layout>
      <div className="mb-4">
        <div className="flex w-full space-x-5">
          <img
            src={kost.img}
            alt=""
            className="w-[650px] h-[400px] rounded-xl"
          />
          <div className="space-y-4">
            <div className="flex items-center space-x-2 w-full h-10">
              <p className="text-3xl font-bold">{kost.kategori}</p>
              <p className="text-xl">Tersisa {kost.sisa} Kamar</p>
            </div>
            <p className="text-2xl font-semibold">{kost.host}</p>
            <p className="text-2xl font-bold">Harga Rp {kost.price} / Bulan</p>
            <div className="flex space-x-3">
              <ImLocation2 className="text-3xl text-red-600" />
              <p className="text-xl">Alamat {kost.alamat}</p>
            </div>
          </div>
        </div>
        <div className="space-x-5 mt-8">
          <Button colorScheme="cyan" textColor="white">
            Pesan
          </Button>
          <Button colorScheme="cyan" textColor="white">
            Tanya pemilik
          </Button>
        </div>

        <div className="border border-slate-300 my-5" />

        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-2xl font-semibold">Fasilitas</p>
            <div className="mt-3 space-y-2">
              <div className="flex items-center space-x-2">
                <PiToilet className="text-2xl" />
                <p className="text-md font-light">Kamar mandi dalam</p>
              </div>
              <div className="flex items-center space-x-2">
                <FaBed className="text-2xl" />
                <p className="text-md font-light">Kasur tempat tidur</p>
              </div>
              <div className="flex items-center space-x-2">
                <BsDoorClosedFill className="text-2xl" />
                <p className="text-md font-light">Lemari</p>
              </div>
              <div className="flex items-center space-x-2">
                <FaChair className="text-2xl" />
                <p className="text-md font-light">Meja dan kursi</p>
              </div>
              <div className="flex items-center space-x-2">
                <BsKey className="text-2xl" />
                <p className="text-md font-light">Kunci pegang sendiri</p>
              </div>
              <div className="flex items-center space-x-2">
                <FcElectricity className="text-2xl" />
                <p className="text-md font-light">Listrik dan air</p>
              </div>
            </div>
          </div>
          <div>
            <div className="text-2xl font-semibold">lokasi terdekat</div>
            <div className="mt-3 space-y-2">
              <div className="flex items-center space-x-2">
                <FaUniversity className="text-2xl" />
                <p className="text-md font-light">Universitas Megarezky</p>
              </div>
              <div className="flex items-center space-x-2">
                <RiMotorbikeFill className="text-2xl" />
                <p className="text-md font-light">Pangkalan ojek</p>
              </div>
              <div className="flex items-center space-x-2">
                <BiRestaurant className="text-2xl" />
                <p className="text-md font-light">Rumah makan padang</p>
              </div>
              <div className="flex items-center space-x-2">
                <ImRoad className="text-2xl" />
                <p className="text-md font-light">Jalan raya</p>
              </div>
            </div>
          </div>
        </div>
        <div className="border my-5 border-slate-300" />

        <div>
          <p className="text-2xl font-semibold">Ketentuan</p>
          <div className="flex mt-2 items-center space-x-2">
            <GiPerson className="text-2xl" />
            <p className="text-md font-light">Kapasitas maksimal 3 orang</p>
          </div>
        </div>
        <div>
          <p className="text-2xl font-semibold mt-10">Maps</p>
          <img
            src="https://imgsrv2.voi.id/HpO09gZIQxpPSpVKdPkkZwaQELHpXUDAgoUw26q-tiA/auto/1200/675/sm/1/bG9jYWw6Ly8vcHVibGlzaGVycy8xNTE4MjMvMjAyMjAzMzEwODA3LW1haW4uSlBH.jpg"
            alt=""
            className="w-full h-[400px] mt-4 rounded-md"
          />
        </div>

        <div className="border my-5 border-slate-300" />

        <div>
          <p className="text-2xl font-semibold mt-10">
            Kost yang mungkin anda sukai
          </p>
          <div className="grid grid-cols-4 gap-3 mt-4">
            {kost__antang.map((item, index) => (
              <div className="rounded-md border-2" key={index}>
                <img src={item.img} alt="" className="rounded-md h-40 w-full" />
                <div className="px-2 pb-4">
                  <p className="text-xl text-cyan-600 font-semibold">
                    {item.kategori}
                  </p>
                  <p>{item.host}</p>
                  <p>Harga Rp{item.price} / Bulan</p>
                  <div className="flex items-center space-x-2">
                    <AiTwotoneStar className="text-2xl text-yellow-400" />
                    <p>{item.rate} Update hari ini</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Detailpage;

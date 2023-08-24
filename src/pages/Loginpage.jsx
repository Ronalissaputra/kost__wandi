import { Button, Input } from "@chakra-ui/react";
import React from "react";
import { FaUserCircle } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Loginpage = () => {
  return (
    <div className="w-full min-h-screen flex items-center justify-center">
      <div className="w-[450px] bg-white border-2 rounded-xl p-10">
        <div className="flex-row justify-center text-center w-full">
          <FaUserCircle className="w-full text-4xl" />
          <p className="text-3xl font-bold">Login</p>
        </div>
        <div className="mt-10">
          <div>
            <p className="text-xl">Username</p>
            <Input
              variant="outline"
              size="lg"
              placeholder="Username"
              borderWidth={2}
              mt={2}
            />
          </div>
          <div className="mt-5">
            <p className="text-xl">Password</p>
            <Input
              variant="outline"
              size="lg"
              placeholder="Password"
              borderWidth={2}
              mt={2}
            />
          </div>
          <Button colorScheme="facebook" mt={5} w="full">
            Login
          </Button>
          <p className="mt-2 text-center">
            Belum punya akun?{" "}
            <NavLink className="text-blue-700">Daftar</NavLink>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Loginpage;

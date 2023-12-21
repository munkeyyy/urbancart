import React, { useEffect, useState } from "react";
import Login from "./Login";
import NavBar from "./NavBar";

const LoginPage = () => {
  return (
    <div className="bg-white relative">
      <NavBar/>
      <div className="flex mt-10 items-start login justify-between p-4">
        <div className="info">
          <h1 className="text-black font-black text-[1vw]">MY ACCOUNT</h1>
        </div>
        <div>
          <h1 className="text-black font-black text-start mb-5 text-[1vw]">
            Login
          </h1>

          <Login />
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default LoginPage;

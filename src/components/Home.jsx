import React, { useEffect, useRef, useState } from "react";
import NavBar from "./NavBar";
import shoe from "../images/hero.26fc9f87.png";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Home.css";
import LoadingScreen from "./LoadingScreen";
const Home = (cart) => {
  const textRef = useRef(null);
  useEffect(() => {
    gsap
      .timeline({
        defaults: { ease: "power2.out" },
      })
      .fromTo(
        ".text-cont",
        { y: "100px", ease: "power1.in" },
        { y: "0", ease: "power1.in", duration:1 }
      );
  }, []);

  return (
    <div className="home-bg h-screen relative ">
      <div
        // id="offers"
        ref={textRef}
        className="flex  stick items-center  p-3 justify-center h-[4rem] overflow-hidden  gap-[32vw]"
      >
        <div className="h-[4rem] text-cont overflow-hidden">
          <p className="text-white font-bold text-[1.5vw] uppercase">
            up to 60% off
          </p>
        </div>
        <div className="h-[4rem] text-cont overflow-hidden">
          <p className="text-white font-bold text-[1.5vw] uppercase">
            up to 60% off
          </p>
        </div>
        <div className="h-[4rem] text-cont overflow-hidden">
          <p className="text-white font-bold text-[1.5vw] uppercase">
            up to 60% off
          </p>
        </div>
      </div>
      <span className="absolute p-2 opacity-[0.7] text-[#eeee] bottom-0 left-0">
        scroll down
      </span>
    </div>
  );
};

export default Home;

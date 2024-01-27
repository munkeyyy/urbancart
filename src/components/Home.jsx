import React, { useEffect, useRef, useState } from "react";
import NavBar from "./NavBar";
import shoe from "../images/hero.26fc9f87.png";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Home.css"
const Home = (cart) => {
  const [isloaded, setIsLoaded] = useState(false);
  const textRef=useRef(null)
  useEffect(()=>{
    gsap.timeline({
      defaults:{ ease: "power2.out" }
    }).fromTo(textRef.current,{y:"8rem",opacity:0, ease:"power1.in"},{y:"0",opacity:1,ease:"power1.in"})
  },[])

  return (
    <div className="home-bg h-screen relative ">
      
      <div
        // id="offers"
        ref={textRef}
        className="flex  stick items-center  p-3 justify-center  gap-[32vw]"
      >
        <p className="text-white font-bold text-[1.5vw] uppercase">
          up to 60% off
        </p>
        <p className="text-white font-bold text-[1.5vw] uppercase">
          up to 60% off
        </p>
        <p className="text-white font-bold text-[1.5vw] uppercase">
          up to 60% off
        </p>
      </div>
      <span className="absolute p-2 opacity-[0.7] text-[#eeee] bottom-0 left-0">
        scroll down
      </span>
    </div>
  );
};

export default Home;

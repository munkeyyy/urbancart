import React, { useEffect, useRef, useState } from "react";
import NavBar from "./NavBar";
import shoe from "../images/hero.26fc9f87.png";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Home.css"
const Home = () => {
  const [isloaded, setIsLoaded] = useState(false);
  // const shoeRef = useRef()
  //  useEffect(() => {

  //   shoeRef.current.style="transform:translateY(0) rotate(-30deg); transition:all 4s; "
  //   const handleAnimationEnd = () => {
  //     // Add your animation class after the initial animation is completed
  //     shoeRef.current.classList.add('animate-shoe');
  //   };
  //   shoeRef.current.addEventListener('animationend', handleAnimationEnd);

  // }, [])

  // useEffect(() => {
  //   gsap.registerPlugin(ScrollTrigger);

  //   const tl = gsap.timeline({
  //     scrollTrigger: {
  //       trigger: ".cont-1",
  //       start: `center ${document.documentElement.offsetHeight/1.4}`,
  //       end: `bottom bottom`,
  //       scrub: 1,
  //       // markers:true,
  //     },
  //   });
  //   tl.to("#offers", {
  //     top: "150%",
  //     // ease:"power1.inOut",
  //   });
  // }, []);

  return (
    <div className="home-bg h-screen relative ">
      <div>
        <NavBar />
      </div>
      <div
        // id="offers"
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

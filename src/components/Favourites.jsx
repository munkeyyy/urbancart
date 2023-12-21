import React, { useEffect } from "react";
import NavBar from "./NavBar";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import FavouritesBg from "../images/favouritesbg.webp"

const Favourites = () => {
// useEffect(()=>{
// gsap.registerPlugin(ScrollTrigger)
// let tl = gsap.timeline({
//   scrollTrigger:{
//     trigger:".hero",
//     start:`top ${document.documentElement.offsetHeight/1.2}` ,
//     end:"bottom 90%",
//     scrub:1.5,
//     // markers:true,
//   }
// })
// tl.to("#names", {
//   top:"100%",
//   ease:"power1.inOut",
//   delay:1,
//   // duration:.5,
// })
// },[])
  return (
    <div className="h-screen relative hero hero-bg">

      <div id="names" className="flex stick  w-[98vw] items-center justify-between px-[.9vw]">
          <div className="names text-white text-[1.5vw] font-bold">Nike</div>
          <div className="names text-white text-[1.5vw] font-bold">Dunks</div>
          <div className="names text-white text-[1.5vw] font-bold">Low</div>
      </div>
    </div>
  );
};

export default Favourites;

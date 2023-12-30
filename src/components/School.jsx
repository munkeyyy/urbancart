import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { Parallax } from "react-scroll-parallax";
import schoolBg from "../images/school.bg.webp"
const School = () => {
  const schoolRef = useRef(null);
  const imgRef = useRef(null);
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const tl = gsap.timeline({
      scrollTrigger: {
        target: schoolRef.current,
        start: `top ${document.documentElement.offsetHeight/1.5}`,
        end: "bottom bottom",
        scrub: 1,
      },
    });
    tl.to(imgRef.current, {
      scale: 1,
      objectPosition:"bottom",
      // marginTop:"-2%",
      ease: "power1.inOut",
    });
  }, []);
  return (
    <div ref={schoolRef} 
    className="h-screen  overflow-hidden  relative">
      <div  className="image-cont flex flex-col  items-end h-[100%] w-[100%] ">
       
          <img
           
            ref={imgRef}
            className="h-[100%] scale-[3] object-[100%]  w-[100%]"
            src={schoolBg}
            alt="school-bg"
          />

        <div className="cont uppercase p-[2vw] absolute top-[60%] left-[0%]  text-left text-white font-bold text-[4vw] w-[50vw] leading-[8vh]">
          Back To School Collection
        </div>
      </div>
    </div>
  );
};

export default School;

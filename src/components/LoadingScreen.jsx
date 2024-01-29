import React, { useEffect, useState, useRef } from "react";
// import StickerPeelOff from "./StickerPeelOff";
import gsap from "gsap";
const LoadingScreen = ({ setLoading }) => {
  const [width, setWidth] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const loader = useRef(null);
  const bar = useRef(null);
  const load = () => {
    setIsRunning(true);
  };
  useEffect(() => {
    load();
    if (width < 100 && isRunning) {
      setTimeout(() => setWidth((prev) => (prev += 2)), 50);
    }
    const tl = gsap.timeline({
      defaults: { ease: "power1.inOut" },
    });
    if (width === 80) {
      tl.to(".text", { y: "150px", ease: "power3.in" });
    }
    if (width === 100) {
      tl.to(bar.current, { y: "1500px", duration: 1, onComplete: setLoading });
      tl.to(loader.current, { y: "-1000px", duration: 1, delay: 0.5 });
    }
  }, [width, isRunning]);
  return (
    <div
      ref={loader}
      className="bg-white h-screen flex flex-col justify-between"
    >
      <div className="p-4 flex items-center   flex-col justify-center self-center grow ">
        <div className="text-conatiner text-black font-bold text-[6vw]  h-[10vw] overflow-hidden my-[-1vw]">
          <div className="text">FITSOLE</div>
        </div>
        <div className="text-conatiner text-black font-bold text-[6vw] h-[10vw] overflow-hidden my-[-1vw]">
          <div className="text">MUMBAI,INDIA.</div>
        </div>
        <div className="text-conatiner text-black font-bold text-[6vw]  h-[10vw] overflow-hidden my-[-1vw]">
          <div className="text">2024</div>
        </div>
      </div>
      <div ref={bar} className="loader p-4 mb-5">
        <div className="count text-balck font-extrabold mb-2">{width}%</div>
        <div
          className="bar h-1  rounded-full bg-black"
          style={{ width: `${width}%`, transition: "width .5s" }}
        ></div>
      </div>
    </div>
  );
};

export default LoadingScreen;

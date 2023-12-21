import React, { useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const Apparel = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({
      scrollTrigger: {
        target: ".sneaker-sec",
        start: `top   -50%`, // Updated start value
        end: "bottom bottom",
        scrub: 1,
      },
    });

    tl.to(".img", {
      scale: 1,
      delay: 0.2,
      ease: "power2.easeInOut",
    });

 
  }, []);       

  return (
    <div className="relative z-[99] bg-white p-2">
      <div className="sneaker-sec relative  py-[1.8vw] px-[1vw] flex justify-between items-center">
        <div></div>
        <h1 className="font-black text-justify text-[4vw] w-[50vw] leading-[3.8rem]">
          A SNEAKER SOCIETY & CULTURE STORE CURATED BY SNEAKER HEADS IN CAIRO,
          EGYPT.
        </h1>
      </div>
      <div className="shop-now flex justify-center  relative m-2 gap-1">
        <div className="mens-apparel w-[50%] relative">
          <div className="flex sticky top-[50%] justify-center  title z-10  gap-[25vw] p-2">
            <p className="font-semibold uppercase text-white text-[1.8vw]">
              Mens Apparel
            </p>
            <p className="font-semibold uppercase text-white text-[1.8vw]">
              Shop Now
            </p>
          </div>
          <div className="img-cont overflow-hidden">
            <img
              src="https://fitsole.shop/_next/image?url=https%3A%2F%2Fimages.prismic.io%2Ffitsole1%2Fc46bdb7f-ce09-439b-9a5c-7bf8a2be03f5_category-card-men.jpg%3Fauto%3Dcompress%2Cformat&w=1080&q=75"
              alt="mens Apparel"
              className="object-cover img scale-[1.3] h-[100%] w-[100%]"
            />
          </div>
        </div>
        <div className="womens-apparel w-[50%] relative">
          <div className="flex justify-center sticky top-[50%] title  z-10 gap-[22vw] p-2">
            <p className="font-semibold uppercase text-white text-[1.8vw]">
              Womens Apparel
            </p>
            <p className="font-semibold uppercase text-white text-[1.8vw]">
              Shop Now
            </p>
          </div>
          <div className="img-cont overflow-hidden">
            <img
              src="https://fitsole.shop/_next/image?url=https%3A%2F%2Fimages.prismic.io%2Ffitsole1%2F16a710de-602a-400e-b9d2-45e1663957a6_category-card-women.jpg%3Fauto%3Dcompress%2Cformat&w=1080&q=75"
              alt="mens Apparel"
              className="object-cover scale-[1.3] img h-[100%] w-[100%]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Apparel;

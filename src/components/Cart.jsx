import gsap from "gsap";
import React, { useEffect, useRef } from "react";
import { useSelector } from "react-redux";
const Cart = () => {
  const cart = useSelector((state) => state.cart || []);
  const cartRef = useRef(null);
  const itemRef = useRef(null);
  useEffect(() => {
    gsap
      .timeline({
        defaults: { ease: "power2.out" },
      })
      .fromTo(cartRef.current, { y: "1000px" }, { y: "0px" })
      .fromTo(itemRef.current, { x: "1000px" }, { x: "0px" });
  }, []);
  return (
    <div ref={cartRef} className="h-auto  relative">
      <ul className="p-2">
        {cart.map((item) => (
          <li
            ref={itemRef}
            className="flex gap-8 my-3 rounded-md bg-[#f4f4f4] items-center  px-2 py-4"
            key={item.id}
          >
            <div className="image w-[4vw] h-[4vw]">
              <img
                className="h-full w-full rounded-md mix-blend-multiply object-contain"
                src={item.image}
                alt=""
              />
            </div>
            <div className="flex gap-4 flex-col">
              <p className="text-[1vw] font-medium">{item.title}</p>
              <p className="text-[0.8vw] font-medium">Rs.{item.price}</p>
            </div>
          </li>
        ))}
      </ul>
      
    </div>
  );
};

export default Cart;

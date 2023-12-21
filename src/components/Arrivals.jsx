import React, { useState } from "react";

const Arrivals = () => {
  const [products, setProducts] = useState([]);
  return (
    <div>
      <div className="title-bar flex items-center justify-between p-[1vw]">
        <div></div>
        <h1 className="text-black font-extrabold ml-9 text-[.9vw]">
          NEW ARRIVALS
        </h1>
        <a
          href="/"
          className="text-black underline text-[.8vw] font-regular uppercase"
        >
          shop all
        </a>
      </div>
      <div className="flex items-center justify-center gap-2 flex-wrap">
        {products.map((product) => (
          <div key={product.id} className="relative flex flex-col gap-8">
            <div className="product-cont">
              <button className="text-balck font-light">
                add to wish list
              </button>
              <img src={product.img} alt="shoe" />
              <button className="px-4 py-2">Quick Add</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Arrivals;

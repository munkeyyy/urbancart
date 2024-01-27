import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { isAction } from "redux";
const Arrivals = () => {
  const [products, setProducts] = useState([]);
  const token = localStorage.getItem("token");
  const dispatch = useDispatch();

  
  useEffect(() => {
    axios
      .get(
        "https://fakestoreapi.com/products",
        {},
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      )
      .then((res) => {
        setProducts(res.data);
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const filteredProducts = products.filter((product, index) => product.id < 9);
  const itemAdded = useSelector((state)=>state.itemAdded)
  const handleAdd=(p)=>{
    dispatch({ type: "UPDATE_CART", payload: p });
    dispatch({type:"IS_ADDED_TO_CART", payload:true})
    dispatch({type:"ITEM_ADDED", payload: itemAdded +1})
  }
  return (
    <div className="flex flex-col gap-2">
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
      <div className="flex items-center  gap-1 flex-wrap p-2 shrink-0">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className="relative h-[100%]  cursor-pointer group  w-[24.8%] bg-[#F7F7F7] flex flex-col gap-8"
            
          >
            <div className="product-cont   p-[1vw] relative justify-between gap-4  flex flex-col ">
              <button className="text-black btn bg-transparent font-normal  opacity-0 group-hover:opacity-[1] transition-[all.5s] ">
                Add to wish list
              </button>
              <div className="w-[80%] h-[15vw] p-4 self-center">
                <img
                  src={product.image}
                  className="bg-[none] h-full w-full scale-[1] group-hover:scale-[1.09] transition-[all.8s] mix-blend-multiply object-contain"
                  alt="shoe"
                />
              </div>
              <button onClick={()=> handleAdd(product)}  className="px-4 btn bg-transparent opacity-0 font-medium p-2 w-full border border-black  rounded-md group-hover:opacity-[1] transition-[all.8s]  py-2">Quick Add</button>
            </div>
            <div className="bottom bg-white p-4 flex justify-between">
                <div className="font-semibold ">{product.title.slice(0,25)}</div>
                <div>{product.price}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Arrivals;

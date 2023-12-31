// import React from "react";
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import {
  MdAttachMoney,
  MdCloudUpload,
  MdDelete,
  MdFastfood,
  MdFoodBank,
} from "react-icons/md";
import axios from "axios";
import { FaPlus } from "react-icons/fa6";
import { Routes, Route, useNavigate } from "react-router-dom";
import NewItem from "./NewItem";
import { notification } from "antd";
// Import Swiper styles
// Import Swiper styles

// Install Swiper modules

const AdminPanel = () => {
  const [products, setProducts] = useState([]);
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .post(
        "https://react-batch.onrender.com/api/products/products-list",
        {},
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      )
      .then((res) => {
        
        setProducts(res.data.data);
        console.log(res.data.data);
      })
      .catch((err) => console.log(err));
    console.log(products);
  }, []);
  const handleClick = () => {
    navigate("/adminpanel/add-items");
  };

  const handleDelete = (productId) => {
    setProducts(products.filter((product) => product._id !== productId));
    notification.open({
      message: `Product deleted successfully`,
      onClick: () => {
        console.log("Notification Clicked!");
      },
    });
  };

  return (
    <>
      <div className="bg-white relative h-screen">
        <div className="products p-4">
          <div className="product-cards flex items-center  flex-wrap gap-2">
            {products &&
              products.map((elem, i) => {
                const discountedPercenatge=((elem.price-elem.discountedPrice)/elem.price)*100;
               

                return (
                  <div
                    key={i}
                    className="product-card mt-4  w-[30vw] bg-[#F7F7F7]"
                  >
                    <div className="card-inner p-[1vw] relative justify-between gap-4 transition-[all.8s] flex flex-col ">
                      <button className="btn p-btn bg-[transparent] opacity-0 self-end">
                        Edit Product
                      </button>
                      <div className="product-img w-[20vw] p-4 self-center">
                        <img
                          src={elem.imageUrl}
                          loading="lazy"
                          alt="productImage"
                          className="h-[100%] w-[100%] object-cover"
                        />
                      </div>
                      <button
                        onClick={() => handleDelete(elem._id)}
                        className="btn p-btn p-[0.6vw] transition-[all.8s] opacity-0 rounded-md bg-white border-2 border-[rgba(74,74,74,0.15)] hover:bg-red-400 hover:text-white"
                      >
                        Delete Product
                      </button>
                    </div>
                    <div className="card-info bg-white">
                      <div className="flex justify-between">
                        <p className="font-semibold text-[2vw] md:text-[1vw] lg:text-[1.2vw]">
                          {elem.name}
                        </p>
                        <p className="text-[1.8vw] md:text-[1.1vw]">
                          <del>Rs.{elem.price}</del>
                        </p>
                      </div>
                      <p className="text-left my-2 text-[1.8vw] md:text-[1.1vw]">
                        {elem.description.length > 50
                          ? elem.description.slice(0, 150) + "..."
                          : elem.description}
                      </p>
                      <p className="text-right text-[1.8vw] md:text-[1.1vw]">
                        <span className="font-semibold">
                          Discounted Price:{" "}
                        </span>
                        Rs.{elem.discountedPrice}
                        &nbsp;
                        &nbsp;
                        <span className="text-[#EA7474]">[-{Math.round(discountedPercenatge)}%]</span>
                      </p>
                    </div>
                  </div>
                );
              })}
          </div>
        </div>
        <button
          onClick={handleClick}
          className="btn px-[1vw] fixed bottom-10 right-5 bg-emra py-2 flex items-center gap-2 text-white font-semibold rounded-lg bg-emerald-600"
        >
          <FaPlus /> New Item
        </button>
      </div>
    </>
  );
};

export default AdminPanel;

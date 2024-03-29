import React, { useState, useRef } from "react";
import NavBar from "./NavBar";
import axios from "axios";
import {
  MdAttachMoney,
  MdCloudUpload,
  MdDelete,
  MdFastfood,
  MdFoodBank,
} from "react-icons/md";
import { notification } from "antd";
import { Formik } from "formik";
import AddProduct from "./AddProduct";
import { FaArrowLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
const NewItem = () => {
  const [title, setTitle] = useState("");
  const [categoryInfo, setCategoryInfo] = useState({ category: "" });
  const [categories, setCategories] = useState([]);
  const token = localStorage.getItem("token");
  const inputRef = useRef();
  
  const getCategories = () => {
    axios
      .get("https://fakestoreapi.com/products/categories", {
        headers: {
          Authorization: `Bearer ` + token,
        },
      })
      .then((res) => {
        setCategories(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const addCategory = () => {
    axios
      .post(
        "https://react-batch.onrender.com/api/products/add-category",
        {
          category: categoryInfo.category,
        },
        {
          headers: {
            Authorization: `Bearer ` + token,
            "Content-Type": "application/json",
          },
        }
      )
      .then((res) => {
        console.log(res.data);
        getCategories();
        notification.open({
          message: "category added successfully",
          onClick: () => {
            console.log("Notification Clicked!");
          },
        });
        inputRef.current.value = "";
      })
      .catch((err) => {
        notification.open({
          message: `${err.response.data.message}`,
          onClick: () => {
            console.log("Notification Clicked!");
          },
        });
        console.log(err);
      });
  };
  console.log(categoryInfo)
  return (
    <div>
      <div className="bg-gray-100 relative">
        <div className="p-4 text-[1.3vw]">
          <Link to={"/adminpanel"}>
            <FaArrowLeft />
          </Link>
        </div>

        <div className="flex justify-center py-[2vw] px-[10vw]  bg-gray-100">
          <div className="rounded-md p-[2vw] border-black border-[1px] h-full w-full flex flex-col">
            {/* <div className="add-cat-title mb-4 md:mb-8 flex self-start md:self-start gap-2 md:gap-4">
              <input
                type="text"
                ref={inputRef}
                onChange={(e) => {
                  setCategoryInfo({
                    ...categoryInfo,
                    category: e.target.value,
                  });
                }}
                name="category"
                className="lg:w-[71vw] md:w-[69vw]  sm:w-[68.8vw] w-[67vw] p-3 bg-transparent border-b-[1px] focus-visible:borderd-b-[2px] border-black"
                placeholder="Add category"
              />
              <button
                onClick={addCategory}
                className="px-[1.2vw] btn py-[.5vw]  text-white text-md bg-black rounded-lg"
              >
                Add
              </button>
            </div> */}
            <AddProduct categories={categories} getCategories={getCategories} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewItem;

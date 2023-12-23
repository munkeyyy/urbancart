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
const NewItem = () => {
  const [title, setTitle] = useState("");
  const [categoryInfo, setCategoryInfo] = useState({ category: "" });
  const [categories, setCategories] = useState([]);
  const token = localStorage.getItem("token");
  const inputRef = useRef();
  const getCategories = () => {
    axios
      .get("https://react-batch.onrender.com/api/products/get-categories", {
        headers: {
          Authorization: `Bearer ` + token,
        },
      })
      .then((res) => setCategories(res.data.data))
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
        console.log(err)
      });
  };
  return (
    <div>
      <div className="bg-white relative">
        <div className="flex justify-center py-[2vw] px-[10vw]  bg-gray-100">
          <div className="rounded-md p-[2vw] border-black border-[1px] h-full w-full flex flex-col">
            <div className="add-cat-title mb-4 md:mb-8 flex self-start md:self-start gap-2 md:gap-4">
              <input
                type="text"
                ref={inputRef}
                onChange={(e) =>
                  setCategoryInfo({
                    ...categoryInfo,
                    category: e.target.value,
                  })
                }
                name="category"
                className="w-[70vw]  p-3 bg-transparent border-b-[1px] focus-visible:borderd-b-[2px] border-black"
                placeholder="Add category"
              />
              <button
                onClick={addCategory}
                className="px-[1.2vw] btn py-[.5vw]  text-white text-md bg-black rounded-lg"
              >
                Add
              </button>
            </div>
            <AddProduct categories={categories} getCategories={getCategories}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewItem;

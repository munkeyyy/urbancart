// import React from "react";
import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import {
  MdAttachMoney,
  MdCloudUpload,
  MdDelete,
  MdFastfood,
  MdFoodBank,
} from "react-icons/md";
import NavBar from "./NavBar";
import axios from "axios";
import { notification } from "antd";

const AdminPanel = () => {
  const [title, setTitle] = useState("");
  const [categoryInfo, setCategoryInfo] = useState({category:""});
  const [categories, setCategories] = useState([]); 
  const token = localStorage.getItem("token");
  const inputRef = useRef()
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
        inputRef.current.value=""
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="bg-white relative">
      <NavBar />
      <div className="flex justify-center py-[2vw] px-[10vw] h-screen bg-gray-100">
        <div className="border-dashed rounded-md p-[2vw] border-gray-400 border-[1px] h-full w-full flex flex-col">
          <div className="add mb-4 flex items-center justify-between">
            <div className="add-cat-title flex gap-4">
              <input
                type="text"
                ref={inputRef}
                onChange={(e) =>
                  setCategoryInfo({ ...categoryInfo, category: e.target.value })
                }
                name="category"
                className="w-[30vw] p-3 bg-transparent border-b-[3px] border-dashed focus-visible:borderd-b-[3px] border-gray-400 placeholder:font-semibold"
                placeholder="Add category"
              />
              <button
                onClick={addCategory}
                className="px-[1vw] btn py-[.5vw]  text-white text-[1vw] bg-emerald-600 rounded-lg"
              >
                Add
              </button>
            </div>
            <div className="add-prod-title flex gap-4">
              <input
                type="text"
                className="w-[30vw] p-3 bg-transparent border-b-[3px] border-dashed focus-visible:borderd-b-[3px] border-gray-400 placeholder:font-semibold"
                placeholder="Give Me a Title"
              />
              <button className="px-[1vw] btn py-[.5vw]  text-white text-[1vw] bg-emerald-600 rounded-lg">
                Add
              </button>
            </div>
          </div>
          <div className="slect w-full">
            <select onClick={()=>{getCategories()}} className="w-full p-2 rounded-lg" name="" id="">
              <option>Select</option>
              {categories.map((cat, index) => (
                <option key={index}>{cat.name}</option>
              ))}
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;

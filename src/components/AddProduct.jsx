import React, { useState, useEffect } from "react";
import { Formik } from "formik";
import { notification } from "antd";
import {
  MdAttachMoney,
  MdCloudUpload,
  MdDelete,
  MdFastfood,
  MdFoodBank,
} from "react-icons/md";
import axios from "axios";
const AddProduct = ({ categories, getCategories }) => {
  const token = localStorage.getItem("token");
  console.log(categories,'KKKKK')

  useEffect(()=>{
    getCategories()
  },[])
  return (
    <div>
      <Formik
        initialValues={{
          name: "",
          category: "",
          image: "",
          description: "",
          price: "",
          discountedPrice: "",
        }}
        validate={(values) => {
          const errors = {};
          if (!values.name) {
            errors.name = "Name cannot be empty";
          }
          if (!values.category) {
            errors.category = "Please slect a category";
          }
          if (!values.image) {
            errors.image = "Please add an image";
          }
          if (!values.description) {
            errors.description = "Please add a decsiption";
          }
          if (!values.price) {
            errors.price = "Please add a price above";
          }
          if (!values.discountedPrice) {
            errors.discountedPrice = "Please add a discounted price above";
          }
          return errors;
        }}
        onSubmit={(values) => {
          //   console.log(values);
          axios
            .post(
              "https://fakestoreapi.com/products",
              {
                name: values.name,
                description: values.description,
                price: values.price,
                image: values.image,
                category: values.category,
              },
              {
                headers: {
                  Authorization: "Bearer " + token,
                },
              }
            )
            .then((res) => {console.log(res.data)
              notification.open({
                message: `Product added successfully`,
                onClick: () => {
                  console.log("Notification Clicked!");
                },
              });
            })
            .catch((err) => console.log(err));

          // console.log(categories)
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          /* and other goodies */
        }) => (
          <form onSubmit={handleSubmit}>
            <div className="add-product flex flex-col">
              <div className="add">
                <div className="add-prod-title mb-4 md:mb-8 flex flex-col self-start md:self-center gap-4">
                  <input
                    type="text"
                    name="name"
                    className="w-[76vw]  p-3 bg-transparent al border-b-[1px]  focus-visible:borderd-b-[2px] border-black"
                    placeholder="Give Me a Title"
                    value={values.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  <p className="text-red-600 text-xs">
                    {errors.name && touched.name && errors.name}
                  </p>
                </div>
              </div>
              <div className="slect w-full">
                <select
              
                  onChange={handleChange}
                  className="w-full p-2 flex items-center justify-between rounded-lg"
                  name="category"
                  value={values.category}
                  onBlur={handleBlur}
                >
                  <option className="p-4">Select</option>
                  {categories ? (
                    categories.map((cat, index) => (
                      <option
                        className="flex items-center gap-44 justify-between"
                        key={index}
                        value={cat}
                      >
                        {cat}
                      </option>
                    ))
                  ) : (
                    <option>Loading...</option>
                  )}
                </select>
                <p className="text-red-600 text-xs">
                  {errors.category && touched.category && errors.category}
                </p>
              </div>
              <div className="img-upload h-72 border-dashed border-2   mb-8 border-black mt-9 rounded-md">
                <label className="w-full h-full  flex p-2  flex-col  items-center justify-center">
                  <>
                    <div className="w-full h-full  flex  flex-col  items-center justify-center">
                      <MdCloudUpload className="text-gray-800 text-3xl hover:text-black" />
                      <p className="text-gray-800  hover:text-black ">
                        Click here to upload
                      </p>
                    </div>
                    <input
                      type="file"
                      name="image"
                      onChange={handleChange}
                      className="w-0 h-0"
                      value={values.image}
                      onBlur={handleBlur}
                    />
                  </>

                  <p className="text-red-600 text-xs">
                    {errors.image && touched.image && errors.image}
                  </p>
                </label>
              </div>

              <div className="desc mb-8 md:mb-4 self-start">
                <input
                  type="text"
                  placeholder=" Add Description"
                  className="w-[76vw] p-[3vw] bg-[transparent] break-words border-[1px] rounded-md  border-black"
                  name="description"
                  value={values.description}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <p className="text-red-600 text-xs">
                  {errors.description &&
                    touched.description &&
                    errors.description}
                </p>
              </div>
              <div className="prices flex md:flex-row md:mb-6 mb-10 flex-col item-center justify-between">
                <div>
                  <input
                    type="text"
                    name="price"
                    value={values.price}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className="w-[73vw] md:w-[30vw] p-3 bg-transparent border-b-[1px]  focus-visible:borderd-b-[2px] border-black"
                    placeholder="Add Price"
                  />
                  <p className="text-red-600 text-xs">
                    {errors.price && touched.price && errors.price}
                  </p>
                </div>
                <div>
                  <input
                    type="text"
                    name="discountedPrice"
                    className="w-[73vw] md:w-[30vw] p-3 bg-transparent border-b-[1px]  focus-visible:borderd-b-[2px] border-black"
                    placeholder="Add Discount Price"
                    value={values.discountedPrice}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  <p className="text-red-600 text-xs">
                    {errors.discountedPrice &&
                      touched.discountedPrice &&
                      errors.discountedPrice}
                  </p>
                </div>
              </div>
              <button
                type="submit"
                className="btn px-3 py-2 text-white mx-auto rounded-md"
              >
                Save
              </button>
            </div>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default AddProduct;

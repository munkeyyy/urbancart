import React, { useState, useEffect } from "react";
import { Formik } from "formik";
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

  return (
    <div>
      <Formik
        initialValues={{
          name: "",
          category: "",
          imageUrl: "",
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
          if (!values.imageUrl) {
            errors.imageUrl = "Please add an image";
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
              "https://react-batch.onrender.com/api/products/add-product",
              {
                name: values.name,
                description: values.description,
                price: values.price,
                discountedPrice: values.discountedPrice,
                imageUrl: values.imageUrl,
                category: values.category,
              },
              {
                headers: {
                  Authorization: "Bearer " + token,
                },
              }
            )
            .then((res) => console.log(res.data))
            .catch((err) => console.log(err));
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
                  onMouseOver={() => {
                    getCategories();
                  }}
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
                      >
                        {cat.name}
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
                <label className="w-full h-full  flex p-2  flex-col  items-center justify-center cursor-pointer">
                  {!values.imageUrl ? (
                    <>
                      <div className="w-full h-full  flex  flex-col  items-center justify-center">
                        <MdCloudUpload className="text-gray-800 text-3xl hover:text-black" />
                        <p className="text-gray-800  hover:text-black ">
                          Click here to upload
                        </p>
                      </div>
                      <input
                        type="file"
                        name="imageUrl"
                        accept="image/*"
                        onChange={(e) => {
                          const selectedFile = e.target.files[0];
                          const imageUrl = URL.createObjectURL(selectedFile);
                          handleChange({
                            target: {
                              name: "imageUrl",
                              value: imageUrl,
                            },
                          });
                        }}
                        className="w-0 h-0"
                        value={values.imageUrl}
                        onBlur={handleBlur}
                      />
                    </>
                  ) : (
                    <div className="relative h-full">
                      <img
                        src={values.imageUrl}
                        className="h-full w-full object-cover"
                        alt="productImage"
                      />
                      {/* <button
                      type="button"
                      className="absolute bottom-3 -right-5 p-3 rounded-full bg-red-500 text-xl cursor-pointer outline-none hover:shadow-md active:scale-[0.92] transition-all duration-500 ease-in-out "
                      onClick={deleteImage}
                    >
                      <MdDelete className="text-black" />
                    </button> */}
                    </div>
                  )}
                  <p className="text-red-600 text-xs">
                    {errors.imageUrl && touched.imageUrl && errors.imageUrl}
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

import React, { useState } from "react";
import NavBar from "./NavBar";
import { Formik } from "formik";
import { Link } from "react-router-dom";
import axios from "axios";

const Register = () => {
  return (
    <div className="h-screen relative">
      <NavBar/>
      <div className="flex mt-10 justify-between p-[1vw]">
        <div className="info">
          <h1 className="text-black font-black text-[1vw]">MY ACCOUNT</h1>
        </div>
        <div className="form flex justify-center flex-col items-start gap-6  m">
          <h1 className="text-black font-black text-[1vw]">Register</h1>
          <Formik
            initialValues={{
              email: "",
              password: "",
              firstname: "",
              lastname: "",
              address: "",
              phoneNumber: "",
              company: "",
              gender: "",
            }}
            validate={(values) => {
              const errors = {};
              if (!values.email) {
                errors.email = "Required";
              } else if (
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
              ) {
                errors.email = "Invalid email address";
              }
              if (!values.firstname) {
                errors.firstname = "Required";
              }
              if (!values.lastname) {
                errors.lastname = "Required";
              }
              if (!values.password) {
                errors.password = "Required";
              } else if (values.password.length < 5) {
                errors.password = "Password Must Contain Atleast 5 characters";
              }
              if (!values.phoneNumber) {
                errors.phoneNumber = "required";
              } else if (values.phoneNumber < 10) {
                errors.phoneNumber =
                  "Phone number should contain atleast 10 characters";
              }
              if (!values.gender) {
                errors.gender = "should choose atleast any one of the options";
              }
              if (!values.address) {
                errors.address = "rewuired";
              }
              if (!values.company) {
                errors.company = "please enter your company";
              }
              return errors;
            }}
            onSubmit={(values) => {
              console.log(values);
              axios
                .post("https://react-batch.onrender.com/api/user/register", {
                  email: values.email,
                  password: values.password,
                  firstname: values.firstname,
                  lastname: values.lastname,
                  gender: values.gender,
                  address: values.address,
                  phoneNumber: values.phoneNumber,
                  company: values.company,
                })
                .then((res) => {
                  console.log(res.data);
                })
                .catch((err) => {
                  console.log(err);
                });
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
              <form
                className="flex flex-col gap-5 items-center"
                onSubmit={handleSubmit}
              >
                <div className="flex gap-6">
                  <div className="flex flex-col">
                    <input
                      className="border rounded-sm p-[.5vw]  border-black focus-visible:outline focus-visible:outline-black"
                      type="text"
                      name="firstname"
                      placeholder="First name"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.firstname}
                    />
                    <span className="text-[red] text-[1vw]">
                      {errors.firstname &&
                        touched.firstname &&
                        errors.firstname}
                    </span>
                  </div>
                  <div className="flex flex-col">
                    <input
                      className="border rounded-sm p-[.5vw] border-black focus-visible:outline focus-visible:outline-black"
                      type="text"
                      name="lastname"
                      placeholder="Last name"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.lastname}
                    />
                    <span className="text-[red] text-[1vw]">
                      {errors.lastname && touched.lastname && errors.lastname}
                    </span>
                  </div>
                </div>
                <div className="flex flex-col">
                  <input
                    className="border rounded-sm p-[.5vw] w-[26rem]  border-black focus-visible:outline focus-visible:outline-black"
                    type="email"
                    name="email"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    placeholder="Email"
                    value={values.email}
                  />
                  <span className="text-[red] text-[1vw]">
                    {errors.email && touched.email && errors.email}
                  </span>
                </div>
                <div className="flex flex-col gap-4">
                  <input
                    className="border rounded-sm p-[.5vw] w-[26rem]  border-black focus-visible:outline focus-visible:outline-black"
                    type="password"
                    placeholder="Password"
                    name="password"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.password}
                  />
                  <span className="text-[red] text-[1vw]">
                    {errors.password && touched.password && errors.password}
                  </span>
                </div>
                <div className="flex flex-col gap-4">
                  <input
                    className="border rounded-sm p-[.5vw] w-[26rem]  border-black focus-visible:outline focus-visible:outline-black"
                    type="number"
                    placeholder="Phone number"
                    name="phoneNumber"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.phoneNumber}
                  />
                  <span className="text-[red] text-[1vw]">
                    {errors.phoneNumber &&
                      touched.phoneNumber &&
                      errors.phoneNumber}
                  </span>
                </div>
                <div className="flex self-start flex-col">
                  <div className="flex items-start justify-start gap-[3vw] mr-[2vw]">
                    <span className="text-black font-semibold">Gender</span>
                    <label>
                      <input
                        type="radio"
                        name="gender"
                        value="male"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        checked={values.gender === "male"}
                      />
                      Male
                    </label>
                    <label>
                      <input
                        type="radio"
                        name="gender"
                        value="female"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        checked={values.gender === "female"}
                      />
                      Female
                    </label>
                    <label>
                      <input
                        type="radio"
                        name="gender"
                        value="other"
                        onChange={handleChange}
                        onBlur={handleBlur}
                        checked={values.gender === "other"}
                      />
                      Other
                    </label>
                  </div>
                  <span className="text-[red]">
                    {touched.gender && errors.gender && errors.gender}
                  </span>
                </div>
                <div className="flex flex-col gap-5">
                  <div className="flex  items-start gap-[2vw]  self-start">
                    <label htmlFor="address" className="font-semibold">
                      Address
                    </label>
                    <textarea
                      id="address"
                      name="address"
                      placeholder="address"
                      onChange={handleChange}
                      className="border rounded-sm p-[.5vw] w-[20rem] h-[10rem] border-black focus-visible:outline focus-visible:outline-black"
                      onBlur={handleBlur}
                      value={values.address}
                    />
                  </div>
                  <span className="text-[red]">
                    {touched.address && errors.address && errors.address}
                  </span>
                </div>

                <div className="flex flex-col gap-5">
                  <div className="flex self-start gap-[2vw]">
                    <label htmlFor="company" className="font-semibold">
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      placeholder="company"
                      name="company"
                      className="border rounded-sm p-[.5vw] w-[20rem] border-black focus-visible:outline focus-visible:outline-black"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.company}
                    />
                  </div>
                  <span className="text-[red]">
                    {" "}
                    {touched.company && errors.company && errors.company}
                  </span>
                </div>

                <span className="self-start mt-[8px]">
                  Already have an account?{" "}
                  <Link
                    to={"/loginpage"}
                    className="border-black text-[rgba(0,0,0,0.8)] hover:text-black border-b-[1px] "
                  >
                    Log in
                  </Link>
                </span>
                <div className="mt-6  w-[100%]">
                  <button
                    className="text-white w-[100%] relative after:absolute after:content-[''] after:h-[1px] after:w-[100%] after:bg-[#00000078] after:top-[-20px] after:left-0  bg-black p-[.5vw] rounded-md"
                    type="submit"
                  >
                    Create Account
                  </button>
                </div>
              </form>
            )}
          </Formik>
        </div>
        <div></div>
      </div>
      {/* <footer className="flex absolute bottom-0 gap-[20vw] items-center justify-between p-[1vw]">
        <div>
          <span>&copy;</span>2023
        </div>
        <div>Terms And Services</div>
        <div>Privacy Policy</div>
        <div>Returns And Exchange</div>
      </footer> */}
    </div>
  );
};

export default Register;

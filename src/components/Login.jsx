import React from "react";
import { Formik } from "formik";
import { Link } from "react-router-dom";
import axios from "axios";
import { notification } from "antd";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isAdmin = useSelector((state) => state.isAdmin);
  const getUserDetails = () => {
    const token = localStorage.getItem("token");
    axios
      .get("https://fakestoreapi.com/users", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((res) => {
        console.log(res.data);
        // localStorage.setItem("admin", res.data)
        dispatch({
          type: "UPDATE_USER-DETAILS",
          payload: { name: res.data[0].name.firstname },
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="login form">
      <Formik
        initialValues={{ username: "", password: "" }}
        validate={(values) => {
          const errors = {};
          if (!values.username) {
            errors.username = "Required";
          }

          if (!values.password) {
            errors.password = "Password is Required";
          } else if (values.password < 5) {
            errors.password = "Password must coantain atleast 5 charcacters";
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          setSubmitting(false);
          axios
            .post(
              "https://fakestoreapi.com/auth/login",

              {
                username: values.username,
                password: values.password,
              }
            )
            .then((res) => {
              console.log(res.data);
              localStorage.setItem("token", res.data.token);

              // localStorage.setItem("admin",{ema})
              dispatch({ type: "UPDATE_USER_LOGGED_IN", payload: true });

              const token = localStorage.getItem("token");
              console.log(token);
              if (!token) {
                notification.open({
                  message: "unauthorized user",
                });
                navigate("/loginpage");
              } else {
                dispatch({ type: "IS_ADMIN", payload: true });
                notification.open({
                  message: "Logged in Successfully",
                });

                navigate("/adminpanel");
              }
              getUserDetails();
            })
            .catch((err) => {
              notification.open({
                message: "unauthorized user",
              });
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
          <form className="flex flex-col gap-8" onSubmit={handleSubmit}>
            <div className="flex flex-col gap-1">
              <input
                type="text"
                name="username"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.username}
                placeholder="Username"
                className="border  rounded-sm p-[.5vw]  border-black focus-visible:outline focus-visible:outline-black"
              />
              <span className="text-[red]">
                {errors.email && touched.email && errors.email}
              </span>
            </div>
            <div className="flex flex-col gap-1">
              <input
                type="password"
                name="password"
                placeholder="Password"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
                className="border  rounded-sm p-[.5vw]  border-black focus-visible:outline focus-visible:outline-black"
              />
              <span className="text-[red]">
                {errors.password && touched.password && errors.password}
              </span>
            </div>
            <div className="flex items-center justify-between">
              <Link
                className="text-[rgba(0,0,0,0.8)] text-[1vw] hover:underline hover:text-black"
                to={"/register"}
              >
                Create Account
              </Link>
              <button
                className="bg-black text-white  p-[.5vw] rounded-md"
                type="submit"
                disabled={isSubmitting}
              >
                Log in
              </button>
            </div>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default Login;

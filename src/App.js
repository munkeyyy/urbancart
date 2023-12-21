import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/NavBar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Favourites from "./components/Favourites";
import { useRef, useEffect, useState } from "react";
import Arrivals from "./components/Arrivals";
import Apparel from "./components/Apparel";
import School from "./components/School";
import LoadingScreen from "./components/LoadingScreen";
import LocomotiveScroll from "locomotive-scroll";
import AdminPanel from "./components/AdminPanel";
import Login from "./components/Login";
import Register from "./components/Register";
import LoginPage from "./components/LoginPage";

// ... (your imports)

function App() {
  const scrollRef = useRef(null);

  // useEffect(() => {
  //   const scroll = new LocomotiveScroll({
  //     el: scrollRef.current,
  //     smooth: true,
  //   });
  //   return () => {
  //     scroll.destroy();
  //   };
  // }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <div ref={scrollRef}>
                <Home />
                <Favourites />
                <div >
                  <Apparel />
                </div>

                <div>
                  <School />
                </div>

                <div>
                  <LoadingScreen />
                </div>
              </div>
            }
          />
          <Route path="/adminpanel" element={<AdminPanel />} />
          <Route  path="/register" element={<Register/>}/>
          <Route path="/loginpage" element={<LoginPage/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

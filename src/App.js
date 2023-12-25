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
import NewItem from "./components/NewItem";
import Branding from "./components/Branding";
import gsap from "gsap";
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
  useEffect(() => {
    const scrollContainer = scrollRef.current;

    // Create a GSAP timeline for the parallax effect
    const parallaxTimeline = gsap.timeline({
      defaults: { ease: "power2.out" },
      scrollTrigger: {
        trigger: scrollContainer,
        start: "top top",
        end: "bottom bottom",
        scrub: true,
      },
    });

    // Define parallax animations for each section
    parallaxTimeline
      .to(".parallax-home", { y: "-50%" })
      .to(".parallax-favourites", { y: "-50%" })
      .to(".parallax-apparel", { y: "0%" })
      .to(".parallax-school", { y: "-10%" })
      .fromTo(".parallax-branding", { y: "-50%" }, {
        y: "0",
        delay: 1,
      })
      
    return () => {
      // Clean up GSAP animations when the component is unmounted
      parallaxTimeline.kill();
    };
  }, []);

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <div ref={scrollRef}>
                <Home className="parallax-home" />
                <Favourites className="parallax-favourites" />
                <div className="parallax-apparel relative z-10">
                  <Apparel />
                </div>

                <div className="parallax-school relative z-[1]">
                  <School />
                </div>

                <div className="parallax-branding">
                  <Branding />
                </div>
              </div>
            }
          />
          <Route path="/adminpanel" element={<AdminPanel />} />
          <Route path={"/adminpanel/add-items"} element={<NewItem />} />

          <Route path="/register" element={<Register />} />
          <Route path="/loginpage" element={<LoginPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

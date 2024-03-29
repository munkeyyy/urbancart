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
import AdminPanel from "./components/AdminPanel";
import Login from "./components/Login";
import Register from "./components/Register";
import LoginPage from "./components/LoginPage";
import NewItem from "./components/NewItem";
import Branding from "./components/Branding";
import gsap from "gsap";
import { Provider } from "react-redux";
import store from "./store/store";
import Lenis from "@studio-freight/lenis";
import LocomotiveScroll from 'locomotive-scroll';
function App() {
  const scrollRef = useRef(null);
  const screen= useRef(null);
  const [loading, setLoading] = useState(true);

const locomotiveScroll = new LocomotiveScroll();


  // useEffect(() => {
  //   const scroll = new LocomotiveScroll({
  //     el: scrollRef.current,
  //     smooth: true,
  //   });
  //   return () => {
  //     scroll.destroy();
  //   };
  // }, []);


  // useEffect(() => {
  //   const lenis = new Lenis();

  //   lenis.on("scroll", (e) => {
  //     // console.log(e);
  //   });

  //   function raf(time) {
  //     lenis.raf(time);
  //     requestAnimationFrame(raf);
  //   }

  //   requestAnimationFrame(raf);
  // }, []);
  useEffect(() => {
    
    const scrollContainer = scrollRef.current;
  
    // setTimeout(() => setLoading(false), 5000);
    const parallaxTimeline = gsap
    .timeline({
      defaults: { ease: "power2.out" },
      scrollTrigger: {
        trigger: scrollContainer,
        start: "top top",
        end: "bottom bottom",
        scrub: 1,
      },
    })
    .fromTo(".parallax-school", { y: "-50%" }, { y: "0%" })
    .fromTo(
      ".parallax-branding",
      { y: "-50%",},
      {
        y: "15%",
        delay: 10,
        duration:5 
      }
    );

    
  }, []);
  // if (loading) {
    
  //   return <div ref={screen}><LoadingScreen /></div>;
  // }
  return (
    <Provider store={store}>
      <div className="App relative">
        <BrowserRouter>
        {/* <LoadingScreen/> */}
          <Routes>
            <Route
              path="/"
              element={
                <div ref={scrollRef}>
                  <NavBar />
                  <Home className="parallax-home" />
                  <Favourites className="parallax-favourites" />
                  <Arrivals />
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
    </Provider>
  );
}

export default App;

import React, { useRef, useState, useEffect } from "react";
import { CiHeart } from "react-icons/ci";
import { FaShoppingCart } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { Modal } from "antd";
import { Drawer } from "antd";
import { useSelector } from "react-redux";
import Login from "./Login";
import Cart from "./Cart";
import { useDispatch } from "react-redux";
import gsap from "gsap";

const NavBar = () => {
  // const[color, setColor]=useState("black")

  // let [scrollPos, setScrollPos] = useState(0);
  // const navRef = useRef();

  // useEffect(() => {
  //   const handleScroll = () => {
  //     setScrollPos(window.scrollY);
  //     ;
  //   };

  //   window.addEventListener("scroll", handleScroll);
  //   console.log(scrollPos)
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  // const navStyle = {
  //   transform: scrollPos >= 180 ? "translateY(-50px)" : "translateY(0)",
  //   transition: "all 0.5s",
  // };
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const [open, setOpen] = useState(false);

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const isLoggedIn = useSelector((state) => state.isLoggedIn);
  const isAddedToCart = useSelector((state) => state.isAddedToCart);
  const itemAdded = useSelector((state) => state.itemAdded);
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch({ type: "UPDATE_USER_LOGGED_IN", payload: false });
    console.log(dispatch);
  };
  const navRef=useRef(null)
  useEffect(()=>{
    gsap.timeline({
      defaults: { ease: "power2.out" },
    }).from(navRef.current,{y:"-100px",ease:"power1.in", delay:"1s",duration:1})
  },[])
  return (
    <div ref={navRef} className="fixed top-0 w-full z-[99]">
      <div className="py-[1vw] bg-white text-[0.9vw] sticky top-0 text-white bg-[transparent]  z-[100]  px-[1vw] w-full flex items-center justify-between">
        <Link
          to={"/"}
          className="logo text-white bg-black py-1 px-3 relative text-lg font-[700] -rotate-[5deg]"
        >
          fitsole
        </Link>
        <div className="search">
          <input
            placeholder="search"
            className="input border-none border-b-1 text-black focus-visible:border-none focus:border-none focus-within:border-none"
            type="text"
            name="search"
          />
        </div>
        <div>
          <ul className="flex items-center gap-8">
            <Link to={"/hello"}>
              <li className="nav-links text-black flex gap-2 items-center font-[600]">
                Mens
              </li>
            </Link>

            <li className="nav-links text-black flex gap-2 items-center font-[600]">
              Womens
            </li>

            <li className="nav-links text-black flex gap-2 items-center font-[600]">
              Kids
            </li>

            <li className="nav-links text-black flex gap-2 items-center font-[600]">
              Launches
            </li>

            <li className="nav-links text-black flex gap-2 items-center font-[600]">
              sale
            </li>
          </ul>
        </div>
        <div className="flex items-center relative gap-8">
          <button onClick={showModal} className="nav-btn text-black">
            {isLoggedIn ? "ROHIT" : "My Account"}
          </button>
          <button className="nav-btn text-black">WishList</button>
          <button onClick={showDrawer} className="nav-btn text-black">
            Bag {itemAdded>0&&`[${itemAdded}]`}
          </button>
          
        </div>
      </div>
      <Modal
        className="text-[1.5vw] modal"
        title="Login"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        {isLoggedIn ? (
          <button
            className="btn text-white rounded-md p-2"
            onClick={handleLogout}
          >
            Log Out
          </button>
        ) : (
          <>
          <div className="text-[1vw] font-medium mb-4">Username:"mor_2314", Password: "83r5^_"</div>
          <Login />
          </>
        )}
      </Modal>
      <Drawer
        title="Your Products"
        className="text-[1.5vw] relative flex flex-col justify-between"
        placement="right"
        onClose={onClose}
        open={open}
      >
        {isAddedToCart && itemAdded>0 ? (
          <div className="relative overflow-hidden">
            <Cart  />
           <div className="fixed bottom-0 bg-white p-4 w-[47%] mt-4">
            <button className="btn rounded-md text-white p-4 w-[100%]">CheckOut</button>
           </div>
          </div>
        ) : (
          <div>
            <h1 className="text-[4vw] font-bold text-justify leading-[8.3vh]">
              WANT TO ADD SOMETHING TO YOUR BAG?
            </h1>

            <div className="bg-white border-black border-t-[1px] p-[1vw]">
              <button className="bg-black text-white w-[100%] rounded-md p-[.5vw]">
                Go shopping
              </button>
            </div>
          </div>
        )}
      </Drawer>
    </div>
  );
};

export default NavBar;

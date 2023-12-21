import React, { useRef, useState, useEffect } from "react";
import { CiHeart } from "react-icons/ci";
import { FaShoppingCart } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { Modal } from "antd";
import {Drawer } from 'antd';
import Login from "./Login";

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
  
  return (
    <div className="relative">
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
        <div className="flex items-center gap-8">
          <button onClick={showModal} className="nav-btn text-black">My Account</button>
          <button className="nav-btn text-black">WishList</button>
          <button onClick={showDrawer} className="nav-btn text-black">Bag</button>
        </div>
      </div>
      <Modal className="text-[1.5vw] modal" title="Login" open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <Login/>
      </Modal>
      <Drawer title="Your Bag" className="text-[1.5vw] relative flex flex-col justify-between"  placement="right" onClose={onClose} open={open}>
        <h1 className="text-[4vw] font-bold text-justify leading-[8.3vh]">WANT TO ADD SOMETHING TO YOUR BAG?</h1>
        <div className="text-[1vw]">Lorem ipsum dolor sit amet consectetur shkhkhshkhskh akhlahuapupa jaopjopaj aopaapj ahkjhkhihoihoihihoihaihiahioaiouajoaihiahilhaihalhklahklakkl.aljaljajpajpua0uai[aajajiojaijiaiiaayfigaui] adipisicing elit. Doloribus, enim necessitatibus, quam quia dolorum quos eum veniam dolore tempora iste qui saepe quidem vitae. Ipsa ad molestiae tenetur necessitatibus saepe ipsam, reiciendis magni doloribus dolorum! Voluptates quia quaerat aliquam. Molestias, dolorum quidem eligendi vero magnam optio delectus pariatur. Architecto tempore non ullam debitis magnam cum amet eligendi, voluptatum maiores nihil repellat error consequuntur modi delectus adipisci voluptas dolor ea nam quibusdam harum aut sapiente magni neque. Ullam nobis molestiae, quam voluptatibus doloremque reprehenderit? Esse culpa explicabo facere, fuga soluta aliquam optio aperiam distinctio veniam vel. Minus asperiores ut laborum ullam. Ab eaque velit laudantium sit culpa, aperiam ipsa soluta animi ullam cupiditate asperiores doloribus, labore nisi assumenda illo dolore esse earum. Perferendis, vitae labore dolor debitis eum voluptatem soluta. Beatae deserunt facilis fuga nobis pariatur itaque nisi facere inventore cupiditate voluptates et voluptate cumque architecto, exercitationem modi, quaerat magnam, eum id eos quis harum quod corporis aspernatur. Incidunt, repellendus a. Laudantium esse eveniet, doloremque atque tempore asperiores cum ipsam praesentium incidunt perspiciatis facilis repellendus! Dolorum necessitatibus sint impedit accusantium enim voluptatem at, corporis sunt laboriosam dolores rerum ea doloremque culpa atque deserunt amet, in nostrum consequuntur delectus, suscipit magni molestias?</div>
        <div className="bg-white border-black border-t-[1px] p-[1vw]">
          <button className="bg-black text-white w-[100%] rounded-md p-[.5vw]">Go shopping</button>
        </div>
      </Drawer>
    </div>
  );
};

export default NavBar;

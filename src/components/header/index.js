import { FaUser } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";

import "./style.css";
import Logo from "./logo.png";
import { Drawer } from "antd";
import { useState } from "react";

const Header = () => {
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  return (
    <>
      <div className="flex items-center justify-between">
        <img src={Logo} className="w-[222px]" />

        <div className="hidden lg:flex items-center justify-between w-[66%] bg-gray-4000">
          <ul className="flex items-center gap-4 w-[60%] nav-ul">
            <li className="w-[22%]">Builders</li>
            <li className="w-[22%]">Resumes</li>
            <li className="w-[22%]">CV</li>
          </ul>

          <div className="flex gap-2 items-center justify-between nav-rigth">
            <div className="flex gap-2 items-center px-3 py-2 bg-[#d9d9d9] rounded-3xl">
              <FaSearch />
              <input type="search" className="bg-[#d9d9d9] nav-search" />
            </div>

            <span className="flex items-center gap-1 login-btn">
              <FaUser />
              Login
            </span>
          </div>
        </div>

        <span className="btn-humbeurger block lg:hidden" onClick={showDrawer}>
          <GiHamburgerMenu />
        </span>

        <Drawer title="Basic Drawer" onClose={onClose} open={open}>
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Drawer>
      </div>
    </>
  );
};

export default Header;

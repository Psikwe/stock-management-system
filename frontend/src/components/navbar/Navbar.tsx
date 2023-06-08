import React from "react";
import logo from "../../assets/images/nav-logo.png";
import { BsFillBellFill } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";

interface Props {}

const Navbar = (props: Props) => {
  return (
    <>
      <div className="flex justify-between items-center bg-black">
        <div className="flex items-center">
          <img className="w-12" src={logo} />
          <h3 className="text-white">My Dashboard</h3>
        </div>
        <div className="flex">
          <BsFillBellFill color="red" />
          <CgProfile color="red" />
        </div>
      </div>
    </>
  );
};

export default Navbar;

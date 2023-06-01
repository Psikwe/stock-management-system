import React from "react";
import logo from "../../assets/images/nav-logo.png";
import { BsFillBellFill } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";

interface Props {}

const Navbar = (props: Props) => {
  return (
    <>
      <div className="flex justify-between">
        <div>
          <img src={logo} />
        </div>
        <div>
          <BsFillBellFill />
          <CgProfile />
        </div>
      </div>
    </>
  );
};

export default Navbar;

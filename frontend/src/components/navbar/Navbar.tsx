import React from "react";
import logo from "../../assets/images/nav-logo.png";
import { BsFillBellFill } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";
import Button from "../../reusables/button/Button";
import { clearUserSession } from "../../core/utility";

const Navbar = () => {
  const logout = () => {
    clearUserSession();
    window.location.reload();
  };
  return (
    <>
      <div className="flex justify-between items-center bg-black">
        <div className="flex items-center">
          <img className="w-12" src={logo} />
          <h3 className="text-white">Stockup</h3>
        </div>
        <div className="flex items-center">
          <BsFillBellFill color="red" />
          <CgProfile color="red" />
          <Button
            btnOnclick={logout}
            btnName="Logout"
            btnClassName="p-2 bg-white"
          />
        </div>
      </div>
    </>
  );
};

export default Navbar;

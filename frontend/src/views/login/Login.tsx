import React from "react";
import { loginInputFields } from "../../core/utility";
import Button from "../../reusables/button/Button";
import loginImg from "../../assets/images/inventory.png";
import { Link } from "react-router-dom";

const Login = () => {
  localStorage.setItem("login", "yo");
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    localStorage.getItem("login");
    e.preventDefault();
    alert("submit");
  };

  return (
    <div className="flex items-center justify-center h-screen ">
      <div className="flex">
        <img
          className="w-full object-contain h-[28rem] bg-black"
          src={loginImg}
        />
        <form
          className="flex flex-col h-[28rem] w-96 bg-slate-400 p-10"
          onSubmit={handleSubmit}
        >
          <text className="text-2xl">Login</text>
          {loginInputFields.map((field) => (
            <input
              key={field.id}
              type={field.type}
              name={field.name}
              className={field.className}
              placeholder={field.placeholder}
              required
            />
          ))}

          <Button
            btnName="Login"
            btnClassName="bg-red-500  w-full mt-8 p-1 text-white rounded-md"
          />
          <small>Haven't signed up?</small>
          <Link to="/signup" className="underline">
            Signup
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Login;

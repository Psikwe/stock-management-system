import React from "react";
import Button from "../../reusables/button/Button";
import { signupInputFields } from "../../core/utility";
import signupImg from "../../assets/images/inventory.png";
import { Link } from "react-router-dom";

const Signup = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    alert("submit");
  };

  return (
    <div className="flex items-center justify-center h-screen ">
      <div className="flex">
        <img
          className="w-full object-contain h-[28rem] bg-black"
          src={signupImg}
        />
        <form
          className="flex flex-col h-[28rem] w-96 bg-slate-400 p-10"
          onSubmit={handleSubmit}
        >
          <text className="text-2xl">Sign up</text>
          {signupInputFields.map((field) => (
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
            btnName="Signup"
            btnClassName="bg-red-500  w-full mt-6 p-1 text-white rounded-md"
          />
          <small>Already signed up?</small>
          <Link to="/login" className="underline">
            Login
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Signup;

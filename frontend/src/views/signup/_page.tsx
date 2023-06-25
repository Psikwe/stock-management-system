import React from "react";
import Button from "../../reusables/button/Button";
import { signupInputFields } from "../../core/utility";
import { Link } from "react-router-dom";
import { ISignup } from "../../core/interfaces";
import { SignupUser } from "../../api/auth.service";
import Toast from "../../reusables/toast/Toast";

const Signup = () => {
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [toastMessage, setToastMessage] = React.useState<string>("");
  const [showToast, setShowToast] = React.useState<boolean>(false);

  const [signupFormValues, setSignupFormValues] = React.useState<ISignup>({
    fullName: "",
    email: "",
    companyName: "",
    password: "",
  });

  const handleOnchangeSignup = (e: {
    target: { name: string; value: string };
  }) => {
    setSignupFormValues({
      ...signupFormValues,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const data = { ...signupFormValues };
    SignupUser(data)
      .then((res) => {
        if (res && res.status === 200) {
          setIsLoading(false);
          setTimeout(() => {
            setShowToast(true);
            setTimeout(() => {
              setShowToast(false);
            }, 4000);
          }, 1000);
          setToastMessage(res.data.message);
          // window.location.reload();
          console.log(res.data.message);
        } else {
          setToastMessage("An error occurred. Please try again");
        }
      })
      .catch((error) => {
        setTimeout(() => {
          setShowToast(true);
          setTimeout(() => {
            setShowToast(false);
          }, 4000);
        }, 1000);
        console.log(error.message);
      });
  };

  return (
    <>
      {showToast && (
        <Toast
          toastIcon="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
          toastMessage={toastMessage}
          toastChildClassName="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 bg-green-100"
        />
      )}
      <div className="flex items-center justify-center h-screen ">
        <form
          className="flex flex-col h-[28rem] w-96 border-2 border-gray-500 p-10"
          onSubmit={handleSubmit}
        >
          <h2 className="text-2xl">Sign up👀 </h2>
          {signupInputFields.map((field) => (
            <input
              key={field.id}
              type={field.type}
              name={field.name}
              className={field.className}
              placeholder={field.placeholder}
              required
              onChange={handleOnchangeSignup}
            />
          ))}

          <Button
            btnName="Signup"
            btnClassName="bg-red-500  w-full mt-6 p-2 text-white rounded-md"
          />
          <div className="flex justify-between mt-5">
            <small>Already signed up?</small>
            <Link to="/login" className="underline">
              Login
            </Link>
          </div>
        </form>
      </div>
    </>
  );
};

export default Signup;

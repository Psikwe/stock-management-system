import React from "react";
import { getUserToken, loginInputFields } from "../../core/utility";
import Button from "../../reusables/button/Button";
import { Link } from "react-router-dom";
import { ILogin } from "../../core/interfaces";
import { LoginUser } from "../../api/auth.service";
import Spinner from "../../reusables/spinner/Spinner";
import Toast from "../../reusables/toast/Toast";

const Login = () => {
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [toastMessage, setToastMessage] = React.useState<string>("");
  const [showToast, setShowToast] = React.useState<boolean>(false);
  const [loginFormValues, setLoginFormValues] = React.useState<ILogin>({
    email: "",
    password: "",
  });

  const handleOnchangeLogin = (e: {
    target: { name: string; value: string };
  }) => {
    setLoginFormValues({ ...loginFormValues, [e.target.name]: e.target.value });
  };

  // const { mutate: loginUser, status } = mutateLogin();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = { ...loginFormValues };
    setIsLoading(true);
    LoginUser(data).then((res) => {
      if (res.status === 200) {
        setIsLoading(false);
        setTimeout(() => {
          setShowToast(true);
          setTimeout(() => {
            setShowToast(false);
          }, 4000);
        });
        getUserToken(res.data.token);
        setToastMessage(res.data.message);
        setTimeout(() => {
          window.location.reload();
          setTimeout(() => {}, 4000);
        }, 3000);

        console.log(res.data.message);
      } else {
        setTimeout(() => {
          setShowToast(true);
          setTimeout(() => {
            setShowToast(false);
          }, 4000);
        }, 1000);
        setToastMessage("Please wait");
        console.log(res.data.message);
      }
    });
  };

  return (
    //password: KaY1212?!?@exE email: kay@gmail.com
    //password: KaY1212?!?@exE email: test@gmail.com
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
          <h3 className="text-4xl">Login</h3>
          {loginInputFields.map((field) => (
            <input
              key={field.id}
              type={field.type}
              name={field.name}
              className={field.className}
              placeholder={field.placeholder}
              required
              onChange={handleOnchangeLogin}
            />
          ))}
          {isLoading ? (
            <Spinner
              spinnerName="loading"
              firstChildClassName=" !absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
              parentClassnName="flex m-auto h-8 w-8 animate-[spinner-grow_0.75s_linear_infinite] rounded-full bg-current align-[-0.125em] opacity-0 motion-reduce:animate-[spinner-grow_1.5s_linear_infinite]"
            />
          ) : (
            <Button
              btnName="Login"
              btnClassName="bg-red-500  w-full mt-8 p-2 h3-white rounded-md"
            />
          )}
          <div className="absolute bottom-[8rem]">
            <small>Haven't signed up yet?</small>
            <Link to="/signup" className="ml-3 underline">
              Signup
            </Link>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;

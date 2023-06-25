import { IToast } from "../../core/interfaces";

const Toast = (props: IToast) => {
  return (
    <>
      <div
        id="toast-success"
        className="flex items-center absolute top-3 right-3 w-full max-w-xs p-4 mb-4 text-gray-500 bg-white  shadow dark:text-gray-400 dark:bg-gray-800"
        role="alert"
      >
        <div className={props.toastChildClassName}>
          <svg
            aria-hidden="true"
            className="w-5 h-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d={props.toastIcon}
              clip-rule="evenodd"
            ></path>
          </svg>
        </div>
        <div className="ml-3 text-sm font-normal">{props.toastMessage}</div>
      </div>
    </>
  );
};

export default Toast;

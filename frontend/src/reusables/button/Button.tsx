import { IButton } from "../../core/interfaces";

const Button = (props: IButton) => {
  return (
    <button
      onClick={props.btnOnclick}
      disabled={props.btnDisabled}
      className={props.btnClassName}
    >
      {props.btnName}
    </button>
  );
};

export default Button;

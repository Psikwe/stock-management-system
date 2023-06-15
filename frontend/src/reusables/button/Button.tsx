import { IButton } from "../../core/interfaces";

const Button = (props: IButton) => {
  return (
    <button disabled={props.btnDisabled} className={props.btnClassName}>
      {props.btnName}
    </button>
  );
};

export default Button;

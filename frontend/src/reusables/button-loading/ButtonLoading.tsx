import React from "react";
import { IButtonLoading } from "../../core/interfaces";

const ButtonLoading = (props: IButtonLoading) => {
  return (
    <>
      <div className={props.parentClassnName}>
        <div className={props.firstChildClassName} role="status"></div>
        <div>
          <button className={props.btnClassName} disabled={props.disable}>
            {props.btnName}
          </button>
        </div>
      </div>
    </>
  );
};

export default ButtonLoading;

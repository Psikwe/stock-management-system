import { ISpinner } from "../../core/interfaces";

const Spinner = (props: ISpinner) => {
  return (
    <>
      <div className={props.parentClassnName} role="status">
        <span className={props.firstChildClassName}>{props.spinnerName}</span>
      </div>
    </>
  );
};

export default Spinner;

import { ICard } from "../../core/interfaces";

const Card = (props: ICard) => {
  return (
    <div className={props.className}>
      <div>{props.cardName}</div>
      <div className={props.cardNumberClassName}>{props.cardNumber}</div>
    </div>
  );
};

export default Card;

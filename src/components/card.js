import * as React from "react";
import { stCard } from "../stores";

const Card = (props) => {
  const dispatch = React.useContext(stCard.dispatch);

  function handleClick() {
    dispatch({
      type: "click",
    });
  }

  function handleHover() {
    dispatch({
      type: "hover",
      name: props.name,
    });
  }

  return (
    <span
      className="px-[2px] font-bold cursor-pointer border-sky-300 border-b-2 hover:border-sky-500"
      onClick={handleClick}
      onMouseOver={handleHover}
      onFocus={handleHover}
    >
      {props.name}
    </span>
  );
};

export default Card;

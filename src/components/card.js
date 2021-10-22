import * as React from "react";

const Card = (props) => {
  return (
    <span className="px-[2px] font-bold cursor-pointer border-sky-300 border-b-2 hover:border-sky-500">
      {props.name}
    </span>
  );
};

export default Card;

import * as React from "react";
import { stCard } from "../stores";

const CardModal = () => {
  const card = React.useContext(stCard.val);

  console.log('card',card)

  return (
    <div
      className="fixed top-2 right-2 flex flex-col items-end"
    >
      <span>{card.id || '-'}</span>
      <span>{card.name || '-'}</span>
      <span>{card.link || '-'}</span>
      <span>{card.show ? 'Sim' : 'Não'}</span>
      
    </div>
  );
};

export default CardModal;

import * as React from "react";
import { stCard } from "../stores";

const CardModal = () => {
  const card = React.useContext(stCard.val);
  const dispatch = React.useContext(stCard.dispatch);


  function onClose() {
    dispatch({
      type: 'close'
    })

  }


  if (card.show) {
    return (
      <div id="modal" 
      onClick={onClose}>
        <div
          id="background"
          className="fixed top-0 left-0 h-screen w-screen lg:pointer-events-none lg:opacity-0 bg-slate-900 opacity-80"
        />
        <div id="cardWrapper" className="fixed box-border max-lg:top-1/2 max-lg:left-1/2 max-lg:-translate-x-1/2 max-lg:-translate-y-1/2 max-lg:m-2 lg:top-2 lg:right-2 max-w-5/6">
          <img src={card.link} className="w-full xl:w-72 lg:w-64"  />
        </div>
      </div>
    );
  }

  return (
    <div id="modal">
      <div id="cardWrapper" className="fixed max-lg:hidden lg:top-2 lg:right-2">
        <img src={card.link} className="w-full xl:w-72 lg:w-64" />
      </div>
    </div>
  );
};

export default CardModal;

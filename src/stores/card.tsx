import * as React from "react";
import { createContext, useReducer } from "react";

interface ICard {
  id: string;
  name: string;
  link: string;
  show: boolean;
}


interface ICardReducerHoverAction {
  type: 'hover',
  name: string;
}

interface ICardReducerOpenAction {
  type: 'open',
}

interface ICardReducerCloseAction {
  type: 'close',
}

type ICardReducerAction = ICardReducerHoverAction | ICardReducerOpenAction | ICardReducerCloseAction; 


const initialState: ICard = {
  id: "",
  name: "",
  link: "",
  show: false,
};

function normalizeId(text: string) {
  if (!text) {
    return undefined;
  }
  text = text.toLowerCase();
  if (text.startsWith("the ")) {
    text = text.slice(4) + "the";
  }
  return text
    .replace(/™/g, "tm")
    .replace(/\s|,|\.|-|—|'|’|:|\(|\)|"|\/| |!/g, "")
    .replace(/ö|ó|ø/g, "o")
    .replace(/é|ë|è/g, "e")
    .replace(/œ/g, "oe")
    .replace(/ç/g, "c")
    .replace(/á|ã|å|ä|à/g, "a")
    .replace(/í|î|ï/g, "i")
    .replace(/ñ/g, "n")
    .replace(/ü|ú/g, "u");
}

function cardLink(id: string) {
  return `https://static.krcg.org/card/${id}.jpg`;
}

export function cardReducer(state: ICard, action: ICardReducerAction) {
  switch(action.type) {
    case 'hover':
      const id = normalizeId(action.name);
      if (!id) return state;
      return {
        id,
        name: action.name,
        link: cardLink(id),
        show: state.show
      }
    case 'open':
      return {
        ...state,
        show: true
      }
    case 'close':
      return {
        ...state,
        show: false
      }
  }
}

export const stCard = {
  val: createContext(null),
  dispatch: createContext(null)
};

export const CardProvider = ({ children }) => {
  const [card, dispatch] = useReducer(cardReducer, initialState);

  return (
    <stCard.val.Provider value={card}>
      <stCard.dispatch.Provider value={dispatch}>
        {children}
      </stCard.dispatch.Provider>
    </stCard.val.Provider>
  );
};

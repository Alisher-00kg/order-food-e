import React, { createContext, useReducer, useState } from "react";
import { menuItems } from "../utils/constants/foods";
export const FoodsContext = createContext();
const initialState = {
  menuItems: [...menuItems],
  newOrderMassive: [],
  newOrderMassiveid: [],
};
const reducer = (state, action) => {
  switch (action.type) {
    case "change":
      return {
        ...state,
        menuItems: state.menuItems.map((item) =>
          item.id == action.id ? { ...item, amount: action.value } : item
        ),
      };
    case "add":
      if (!state.newOrderMassiveid.includes(action.id)) {
        const finded = state.menuItems.find((item) => item.id === action.id);

        return {
          ...state,
          menuItems: state.menuItems.map((item) =>
            item.id === action.id
              ? { ...item, amount: action.item.amount }
              : item
          ),
          newOrderMassive: [
            ...state.newOrderMassive,
            { ...finded, amount: action.item.amount },
          ],
          newOrderMassiveid: [...state.newOrderMassiveid, action.id],
        };
      } else {
        return {
          ...state,
          newOrderMassive: state.newOrderMassive.map((item) =>
            item.id === action.id
              ? { ...item, amount: item.amount + action.item.amount }
              : item
          ),
        };
      }
    case "increment":
      return {
        ...state,
        newOrderMassive: state.newOrderMassive.map((item) =>
          item.id === action.id ? { ...item, amount: item.amount + 1 } : item
        ),
      };
    case "decrement":
      return {
        ...state,
        newOrderMassive: state.newOrderMassive
          .map((item) =>
            item.id === action.id ? { ...item, amount: item.amount - 1 } : item
          )
          .filter((item) => item.amount > 0),
      };
    case "remove":
      const updatedOrder = state.newOrderMassive.filter(
        (item) => item.id !== action.id
      );
      return {
        ...state,
        newOrderMassive: updatedOrder,
        newOrderMassiveid: updatedOrder.length ? state.newOrderMassiveid : [],
      };
    case "clear_cart":
      return {
        ...state,
        newOrderMassive: [],
        newOrderMassiveid: [],
      };
    default:
      return state;
  }
};
export const FoodsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const total = state.newOrderMassive.reduce((acc, item) => {
    return acc + item.price * item.amount;
  }, 0);
  console.log(total);
  const [isBouncing, setIsBouncing] = useState(false);
  const handleAddAnimation = () => {
    setIsBouncing(true);
    setTimeout(() => setIsBouncing(false), 500);
  };

  return (
    <FoodsContext.Provider
      value={{ state, dispatch, total, isBouncing, handleAddAnimation }}
    >
      {children}
    </FoodsContext.Provider>
  );
};

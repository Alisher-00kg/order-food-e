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
            item.id === action.id ? { ...item, amount: 1 } : item
          ),
          newOrderMassive: [...state.newOrderMassive, finded],
          newOrderMassiveid: [...state.newOrderMassiveid, action.id],
        };
      } else {
        return {
          ...state,
          menuItems: state.menuItems.map((item) =>
            item.id === action.id ? { ...item, amount: 1 } : item
          ),
          newOrderMassive: state.newOrderMassive.map((item) => {
            if (item.amount === 1) {
              console.log(item);

              return item.id === action.id
                ? { ...item, ...action.item, amount: item.amount + 1 }
                : item;
            } else {
              return item.id === action.id
                ? {
                    ...item,
                    ...action.item,
                    amount: item.amount + action.item.amount,
                  }
                : item;
            }
          }),
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
        newOrderMassive: state.newOrderMassive.map((item) =>
          item.id === action.id && item.amount > 0
            ? { ...item, amount: item.amount - 1 }
            : item
        ),
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
  const [foodItems, setFoodItems] = useState([]);
  const handleAddFood = (item) => {
    setFoodItems((prevItems) => [...prevItems, item]);
  };
  return (
    <FoodsContext.Provider
      value={{ foodItems, handleAddFood, state, dispatch, total }}
    >
      {children}
    </FoodsContext.Provider>
  );
};

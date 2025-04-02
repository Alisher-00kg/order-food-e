import React, { createContext, useReducer, useState } from "react";
import { menuItems } from "../utils/constants/foods";
export const FoodsContext = createContext();
const initialState = {
  newOrder: [],
  menu: menuItems,
};
const addingReducer = (state, action) => {
  switch (action.type) {
    case "increment": {
      return {
        ...state,
        newOrder: state.newOrder.map((item) =>
          item.id === action.payload
            ? {
                ...item,
                amount: item.amount + 1,
              }
            : item
        ),
      };
    }
    case "decrement": {
      return {
        ...state,
        newOrder: state.newOrder.map((item) =>
          item.id === action.payload && item.amount > 1
            ? {
                ...item,
                amount: item.amount - 1,
              }
            : item
        ),
      };
    }
    case "delete": {
      return {
        ...state,
        newOrder: state.newOrder.filter((item) => item.id !== action.payload),
      };
    }
    case "adding": {
      const addedItem = state.menu.find((item) => item.id === action.payload);
      if (!addedItem) return state;

      return {
        ...state,
        newOrder: [...state.newOrder, { ...addedItem, amount: 1 }],
      };
    }
    case "update":
      return {
        ...state,
        newOrder: state.newOrder.map((item) =>
          item.id === action.payload.id
            ? { ...item, amount: action.payload.amount }
            : item
        ),
      };
    default:
      return state;
  }
};
export const FoodsProvider = ({ children }) => {
  const [state, dispatch] = useReducer(addingReducer, initialState);
  const [foodItems, setFoodItems] = useState([]);
  const handleAddFood = (item) => {
    setFoodItems((prevItems) => [...prevItems, item]);
  };
  return (
    <FoodsContext.Provider
      value={{ foodItems, handleAddFood, state, dispatch }}
    >
      {children}
    </FoodsContext.Provider>
  );
};

import React, { createContext, useState } from "react";
export const FoodsContext = createContext();
export const FoodsProvider = ({ children }) => {
  const [foodItems, setFoodItems] = useState([]);
  const handleAddFood = (item) => {
    setFoodItems((prevItems) => [...prevItems, item]);
  };
  return (
    <FoodsContext.Provider value={{ foodItems, handleAddFood }}>
      {children}
    </FoodsContext.Provider>
  );
};

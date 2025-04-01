import React from "react";

import { Card } from "./components/Card";
const App = () => {
  return (
    <div>
      <Card
        title={"Sushi"}
        structure={"Finest fish and veggies"}
        price={22.99}
      />{" "}
      <Card
        title={"Schnitzel"}
        structure={"A german speciality"}
        price={16.0}
      />{" "}
      <Card
        title={"Barbecue Burger"}
        structure={"American ,.raw meaty"}
        price={12.99}
      />{" "}
      <Card
        title={"Green Bowl"}
        structure={"Healthy...and green..."}
        price={19.99}
      />
    </div>
  );
};

export default App;

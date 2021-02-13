import "./styles.css";
import React from "react";
import SlotM from "./SlotM";

const App = () => {
  return (
    <div className="App">
      <h1 className="heading_style">
        Welcome to{" "}
        <span style={{ fontWeight: "bolder" }}>Slot machine game</span>
      </h1>
      <div className="slotmachine">
        <SlotM x="p" y="p" z="p" />
        <hr />
        <SlotM x="p" y="q" z="p" />
        <hr />
        <SlotM x="p" y="p" z="r" />
        <hr />
        <SlotM x="t" y="t" z="t" />
        <hr />
      </div>
    </div>
  );
};
export default App;

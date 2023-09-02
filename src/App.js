import React from "react";
import "./App.css";
import CardContainer from "./CardContainer";

function App() {
  return (
    <div
      className="min-h-screen flex flex-col items-center justify-center"
      style={{ backgroundColor: "var(--bg-color)" }}
    >
      <CardContainer />
    </div>
  );
}

export default App;

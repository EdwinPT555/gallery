import React from "react";
import "./App.css";
import Navigation from "./components/Navigation";
import BodyContainer from "./components/BodyContainer";

const App = () => {
  return (
    <div className="App">
      <Navigation />
      <div className="tiles-container">
        <BodyContainer />
      </div>
    </div>
  );
};

export default App;

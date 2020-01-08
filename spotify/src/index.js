import React from "react";
import ReactDOM from "react-dom";
import "./assets/reset.scss";
import "./assets/main.scss";

import Me from "./components/app.js";

//  function App(){
//      return <h1>hello world</h1>
//  }
// we have to return only one parent with a component
const App = () => {
  return (
    <div>
      <Me />
      <h1>hello react</h1>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));

// {           //  <h1> {`${props.name}`}</h1>
//  <img className="img" src="/images/pic.jpg" alt="bike" />}

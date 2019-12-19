import React from "react";
import Sidebar from "./components/sidebar";
import Main from "./components/main/main";
import "./stylesheets/style.scss";

function App() {
  return (
    <div className = "main_flex">
      <Sidebar />
      <Main />
    </div>
  );
}

export default App;

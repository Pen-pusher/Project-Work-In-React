import React from "react";
import MainHeader from "./main_header";
import MainLeft from "./main_left";
import MainRight from "./main_right/main_right";

const Main = () => {
  return (
    <div className = 'main'>
      <MainHeader />
      <div className = "main_bottom">
      <MainLeft />
      <MainRight />
      </div>
      </div>
  );
};

export default Main;

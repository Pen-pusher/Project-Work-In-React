import React from "react";

const MainHeader = () => {
  return (
    <header className="header">
      <div className="header_left">
        <p className="header_left_content">Mailbox</p>
        <p className="header_left_content after">Customers</p>
        <p className="header_left_content after">Reporting</p>
        <p className="header_left_content after">Manage</p>
      </div>
      <div className="header_right">
        <div className="search_container">
          <img className="search" src="img/search.png" alt="" />
          <input className="input_header" placeholder="Search" />
        </div>
        <img className="bell_icon" src="img/bell.svg" alt="" />
        <img className="mark_icon" src="img/mark.svg" alt="" />
      </div>
    </header>
  );
};

export default MainHeader;

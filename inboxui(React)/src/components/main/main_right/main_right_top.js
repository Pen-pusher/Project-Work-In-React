import React from "react";

const MainRightTop = () => {
  return (
    <div className="main_right_top">
      <div className="main_top_right_icons_container">
        <div className="main_top_right_left_icons">
          <div className="main_right_left_icon">
            <img className="left_icon" src="img/back-arrow.svg" alt="" />
          </div>
          <div className="main_right_left_icon">
            <img className="left_icon"  src="img/tag.svg" alt="" />
          </div>
          <div className="main_right_left_icon">
            <img className="left_icon"  src="img/profile-user.svg" alt="" />
          </div>
          <div className="main_right_left_icon">
            <img className="left_icon"  src="img/folder.svg" alt="" />
          </div>
          <div className="main_right_left_icon">
            <img className="left_icon"  src="img/dots.svg" alt="" />
          </div>
        </div>
        <div className="main_top_right_right_icons">
          <p className="arrow_down_right_icons">⌃</p>
          <p className = "arrow_up_right_icons">⌃</p>
        </div>
      </div>
      <div className="student_discount_container">
        <span className="student_discount">
          Re: Student Discount?Re: Student Discount?Re: Student Discount?Re:
          Student ...
        </span><span className="one48">#148</span><button className="active_btn">Active</button>
      </div>
    </div>
  );
};

export default MainRightTop;

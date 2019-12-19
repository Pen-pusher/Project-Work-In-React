import React from "react";

const MainLeft = () => {
  return (
    <div className="main_left">
      <div className="sort_by_container">
        <div className="sort_by_left">
          <p className="sort_by"> Sorted by date </p>
          <p className="sort_by_arrow">⌃</p>
        </div>
        <div className="menu_container">
          <img className="menu_logo" src="img/menu.png" alt="" />
        </div>
      </div>
      {/* 2nd container */}
      <div className="student_details_container">
        {[
          {
            studentname: "Gloria Robetsan",
            studentdetails: "Re: Student Details",
            time: "2 days ago",
            studentdescription:
              "Learning about React and React Router is really really important if you want to get better at creating UIs."
          },
          {
            studentname: "Gloria Robetsan",
            studentdetails: "Re: Student Details",
            time: "2 days ago",
            studentdescription:
              "Learning about React and React Router is really really important if you want to get better at creating UIs."
          },
          {
            studentname: "Gloria Robetsan",
            studentdetails: "Re: Student Details",
            time: "2 days ago",
            studentdescription:
              "Learning about React and React Router is really really important if you want to get better at creating UIs."
          },
          {
            studentname: "Gloria Robetsan",
            studentdetails: "Re: Student Details",
            time: "2 days ago",
            studentdescription:
              "Learning about React and React Router is really really important if you want to get better at creating UIs."
          },
          {
            studentname: "Gloria Robetsan",
            studentdetails: "Re: Student Details",
            time: "2 days ago",
            studentdescription:
              "Learning about React and React Router is really really important if you want to get better at creating UIs."
          },
          {
            studentname: "Gloria Robetsan",
            studentdetails: "Re: Student Details",
            time: "2 days ago",
            studentdescription:
              "Learning about React and React Router is really really important if you want to get better at creating UIs."
          },
          {
            studentname: "Gloria Robetsan",
            studentdetails: "Re: Student Details",
            time: "2 days ago",
            studentdescription:
              "Learning about React and React Router is really really important if you want to get better at creating UIs."
          },
          {
            studentname: "Gloria Robetsan",
            studentdetails: "Re: Student Details",
            time: "2 days ago",
            studentdescription:
              "Learning about React and React Router is really really important if you want to get better at creating UIs."
          },
    
        ].map(data => (
          <MainLeftbottom {...data} />
        ))}
      </div>
    </div>
  );
};

const MainLeftbottom = props => {
  return (
    <div className="student_details">
      <div className="student_name_container">
        <div className="student_name_left">
          <p className="student_name">{props.studentname}</p>
          <p className="student_detail">{props.studentdetails}</p>
        </div>
        <p className="time">{props.time}</p>
      </div>
      <div>
        <p className="about_content">
         {props.studentdescription}
        </p>
      </div>
    </div>
  );
};

export default MainLeft;

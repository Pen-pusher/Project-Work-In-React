import React from "react";

const MainRightBottom = props => {
  return (
    <div className="main_right_bottom">
      {[
        {
          author: "Joe Amstrong",
          wrote: "wrote",
          time: "Yesterday at 7:24AM",
          description: `The idea for a publication that chronicles the design and innovation
      ecosystem in India has been buzzing around in my head for a while, but
      we only got to work on it in July this year. Four and a half months
      later, we’re ready to share it with you with some trepidation and much
      excitement `
        },
        {
          author: "Joe Amstrong",
          wrote: "wrote",
          time: "Yesterday at 7:24AM",
          description: `The idea for a publication that chronicles the design and innovation
      ecosystem in India has been buzzing around in my head for a while, but
      we only got to work on it in July this year. Four and a half months
      later, we’re ready to share it with you with some trepidation and much
      excitement `
        },
        {
          author: "Joe Amstrong",
          wrote: "wrote",
          time: "Yesterday at 7:24AM",
          description: `The idea for a publication that chronicles the design and innovation
      ecosystem in India has been buzzing around in my head for a while, but
      we only got to work on it in July this year. Four and a half months
      later, we’re ready to share it with you with some trepidation and much
      excitement `
        },
        {
          author: "Joe Amstrong",
          wrote: "wrote",
          time: "Yesterday at 7:24AM",
          description: `The idea for a publication that chronicles the design and innovation
      ecosystem in India has been buzzing around in my head for a while, but
      we only got to work on it in July this year. Four and a half months
      later, we’re ready to share it with you with some trepidation and much
      excitement `
        },
        {
          author: "Joe Amstrong",
          wrote: "wrote",
          time: "Yesterday at 7:24AM",
          description: `The idea for a publication that chronicles the design and innovation
      ecosystem in India has been buzzing around in my head for a while, but
      we only got to work on it in July this year. Four and a half months
      later, we’re ready to share it with you with some trepidation and much
      excitement `
        },
        {
          author: "Joe Amstrong",
          wrote: "wrote",
          time: "Yesterday at 7:24AM",
          description: `The idea for a publication that chronicles the design and innovation
      ecosystem in India has been buzzing around in my head for a while, but
      we only got to work on it in July this year. Four and a half months
      later, we’re ready to share it with you with some trepidation and much
      excitement `
        },
        {
          author: "Joe Amstrong",
          wrote: "wrote",
          time: "Yesterday at 7:24AM",
          description: `The idea for a publication that chronicles the design and innovation
      ecosystem in India has been buzzing around in my head for a while, but
      we only got to work on it in July this year. Four and a half months
      later, we’re ready to share it with you with some trepidation and much
      excitement `
        },
        {
          author: "Joe Amstrong",
          wrote: "wrote",
          time: "Yesterday at 7:24AM",
          description: `The idea for a publication that chronicles the design and innovation
      ecosystem in India has been buzzing around in my head for a while, but
      we only got to work on it in July this year. Four and a half months
      later, we’re ready to share it with you with some trepidation and much
      excitement `
        }
      ].map(data => (
        <MainRightBottomContainer {...data} />
      ))}
    </div>
  );
};

const MainRightBottomContainer = props => {
  return (
    <div className="main_right_bottom_container">
      <div className="main_right_bottom_container_small">
        <div>
          <span className="joe">{props.author}</span>{" "}
          <span className="wrote">{props.wrote}</span>
        </div>
        <div className="main_right_bottom_img_container">
          <p className="time_yesterday">{props.time}</p>
          <div className="sidebar_img_container"></div>
        </div>
      </div>
      <p className="para_main_right_bottom">{props.description}</p>
    </div>
  );
};

export default MainRightBottom;

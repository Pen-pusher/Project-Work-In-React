import React from "react";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="slidebar_top_container">
        <div className="sidebar_top_container_small">
          <div className="sidebar_img_container"></div>
          <p className="monaco">Monaco White</p>
        </div>
        <p className="arrow_down">⌃</p>
      </div>
      {/* sidebar second container */}
      <div className="sidebar_second">
        <p className="mailbox">MAILBOXES</p>
        <div className="inbox_container">
          <div className="inbox_img_container">
            <img className="inbox_img" src="img/inbox.png" alt="" />
            <p className="inbox">inbox</p>
          </div>
          <p className="mail_count">6</p>
        </div>
        <MailBox />
        <MailBox />
        <MailBox />
        <MailBox />
        <div className="folders_container">
          <p className="mailbox folders">FOLDERS</p>
         <Refund/>
         <Refund/>
         <Refund/>
         <Refund/>
        </div>
      </div>
    </div>
  );
};

const MailBox = () => {
  return (
    <div className="inbox_container inbox_container2">
      <div className="inbox_img_container">
        <img className="inbox_img" src="img/inbox.png" alt="" />
        <p className="inbox">inbox</p>
      </div>
      <p className="mail_count">6</p>
    </div>
  );
};

const Refund = () => {
return(
  <p className="Refund">Refund</p>
)
}
export default Sidebar;

import React from "react";

function Header() {
    return (
        <div className="header">
            {/* div 1 */}

            <div className="header-left">
                <button className="header-left-content">
                    <span>
                        <img
                            src="/images/avatar.jpeg"
                            // src="https://inboxui.netlify.com/images/avatar.jpeg"
                            alt="monaco pic"
                            className="header-left-pic"
                        ></img>
                        <span className="header-left-name">Monaco White</span>
                    </span>
                    <img
                        src="/images/down-arrow.png"
                        alt="arrow icon"
                        className="arrow-down"
                    ></img>
                </button>
            </div>

            {/* div 2 */}

            <div className="header-right">
                <nav className="nav-bar">
                    <a
                        href="http://www.example.com"
                        className="nav-bar-item nav-bar-item1"
                    >
                        Mailbox
            </a>
                    <a href="http://www.example.com" className="nav-bar-item on-hover">
                        Customers
            </a>
                    <a href="http://www.example.com" className="nav-bar-item on-hover">
                        Reporting
            </a>
                    <a href="http://www.example.com" className="nav-bar-item on-hover">
                        Manage
            </a>
                </nav>
                <div>
                    <span className="header-right-end">
                        <span>
                            <img
                                src="/images/search.png"
                                alt="search-icon"
                                className="header-right-search-icon"
                            ></img>
                        </span>
                        <input
                            type="text"
                            placeholder=""
                            className="header-right-input"
                            placeholder="search"
                        ></input>
                    </span>
                    <span className="icon">
                        <img
                            src="/images/notification.png"
                            alt="notification-icon"
                            className="notification-icon"
                        ></img>
                        <img
                            src="/images/question-icon.png"
                            alt="question-icon"
                            className="question-icon"
                        ></img>
                    </span>
                </div>
            </div>
        </div>
    );
}

export default Header;

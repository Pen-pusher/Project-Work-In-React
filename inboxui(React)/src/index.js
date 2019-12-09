import React from "react";

import ReactDOM from "react-dom";

import "./assets/reset.scss";
import "./assets/main.scss";

function UI() {
    return (

        <>
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
            <div className="hero">
                <div className="hero-left">
                    <nav>
                        <h2 className="hero-left-title">MAILBOXES</h2>
                        <div className="hero-left-inbox">
                            <a href="http://www.example.com" className="hero-left-inbox-nav">
                                <span className="hero-left-inbox-nev-content">
                                    <img
                                        src="/images/inbox.png"
                                        alt="inbox-icon"
                                        className="hero-left-inbox-icon"
                                    ></img>
                                    <span className="hero-left-inbox-content">Inbox</span>
                                </span>
                                <span className="hero-left-inbox-number">6</span>
                            </a>
                            <a
                                href="http://www.example.com"
                                className="hero-left-inbox-nav-1"
                            >
                                <span className="hero-left-inbox-nev-content">
                                    <img
                                        src="/images/inbox.png"
                                        alt="inbox-icon"
                                        className="hero-left-inbox-icon"
                                    ></img>
                                    <span className="hero-left-inbox-content">Inbox</span>
                                </span>
                                <span className="hero-left-inbox-number-1">6</span>
                            </a>
                            <a
                                href="http://www.example.com"
                                className="hero-left-inbox-nav-1"
                            >
                                <span className="hero-left-inbox-nev-content">
                                    <img
                                        src="/images/inbox.png"
                                        alt="inbox-icon"
                                        className="hero-left-inbox-icon"
                                    ></img>
                                    <span className="hero-left-inbox-content">Inbox</span>
                                </span>
                                <span className="hero-left-inbox-number-1">6</span>
                            </a>
                            <a
                                href="http://www.example.com"
                                className="hero-left-inbox-nav-1"
                            >
                                <span className="hero-left-inbox-nev-content">
                                    <img
                                        src="/images/inbox.png"
                                        alt="inbox-icon"
                                        className="hero-left-inbox-icon"
                                    ></img>
                                    <span className="hero-left-inbox-content">Inbox</span>
                                </span>
                                <span className="hero-left-inbox-number-1">6</span>
                            </a>
                            <a
                                href="http://www.example.com"
                                className="hero-left-inbox-nav-1"
                            >
                                <span className="hero-left-inbox-nev-content">
                                    <img
                                        src="/images/inbox.png"
                                        alt="inbox-icon"
                                        className="hero-left-inbox-icon"
                                    ></img>
                                    <span className="hero-left-inbox-content">Inbox</span>
                                </span>
                                <span className="hero-left-inbox-number-1">6</span>
                            </a>
                        </div>
                        <h2 className="hero-left-folder">FOLDERS</h2>
                        <div className="hero-left-folder-content">
                            <p className="hero-left-folder-item">Refund</p>
                            <p className="hero-left-folder-item">Refund</p>
                            <p className="hero-left-folder-item">Refund</p>
                            <p className="hero-left-folder-item">Refund</p>
                        </div>
                    </nav>
                </div>

                <main className="hero-main">
                    <div className="hero-main-left">
                        <div className="hero-main-left-title">
                            <button className="hero-main-left-title-btn">
                                Sorted by date
                <img
                                    src="/images/down-arrow.png"
                                    alt="arrow-down"
                                    className="hero-arrow-down"
                                ></img>
                            </button>
                            <img
                                src="/images/sorting.png"
                                alt="sorting"
                                className="hero-sort"
                            ></img>
                        </div>
                        <div className="hero-main-left-allContent">
                            <a className="hero-main-left-content">
                                <div className="hero-main-left-title">
                                    <span className="hero-main-left-title-name">
                                        Gloria Robetsan
                  </span>
                                    <span className="hero-main-left-title-duration">
                                        2 days ago
                  </span>
                                </div>
                                <p className="hero-main-left-content-details">
                                    Re: Student Details
                </p>
                                <p className="hero-main-left-content-para">
                                    Learning about React and React Router is really really
                                    important if you want to get better at creating UIs.
                </p>
                            </a>
                            <a className="hero-main-left-content">
                                <div className="hero-main-left-title">
                                    <span className="hero-main-left-title-name">
                                        Gloria Robetsan
                  </span>
                                    <span className="hero-main-left-title-duration">
                                        2 days ago
                  </span>
                                </div>
                                <p className="hero-main-left-content-details">
                                    Re: Student Details
                </p>
                                <p className="hero-main-left-content-para">
                                    Learning about React and React Router is really really
                                    important if you want to get better at creating UIs.
                </p>
                            </a>
                            <a className="hero-main-left-content">
                                <div className="hero-main-left-title">
                                    <span className="hero-main-left-title-name">
                                        Gloria Robetsan
                  </span>
                                    <span className="hero-main-left-title-duration">
                                        2 days ago
                  </span>
                                </div>
                                <p className="hero-main-left-content-details">
                                    Re: Student Details
                </p>
                                <p className="hero-main-left-content-para">
                                    Learning about React and React Router is really really
                                    important if you want to get better at creating UIs.
                </p>
                            </a>
                            <a className="hero-main-left-content">
                                <div className="hero-main-left-title">
                                    <span className="hero-main-left-title-name">
                                        Gloria Robetsan
                  </span>
                                    <span className="hero-main-left-title-duration">
                                        2 days ago
                  </span>
                                </div>
                                <p className="hero-main-left-content-details">
                                    Re: Student Details
                </p>
                                <p className="hero-main-left-content-para">
                                    Learning about React and React Router is really really
                                    important if you want to get better at creating UIs.
                </p>
                            </a>
                            <a className="hero-main-left-content">
                                <div className="hero-main-left-title">
                                    <span className="hero-main-left-title-name">
                                        Gloria Robetsan
                  </span>
                                    <span className="hero-main-left-title-duration">
                                        2 days ago
                  </span>
                                </div>
                                <p className="hero-main-left-content-details">
                                    Re: Student Details
                </p>
                                <p className="hero-main-left-content-para">
                                    Learning about React and React Router is really really
                                    important if you want to get better at creating UIs.
                </p>
                            </a>
                            <a className="hero-main-left-content">
                                <div className="hero-main-left-title">
                                    <span className="hero-main-left-title-name">
                                        Gloria Robetsan
                  </span>
                                    <span className="hero-main-left-title-duration">
                                        2 days ago
                  </span>
                                </div>
                                <p className="hero-main-left-content-details">
                                    Re: Student Details
                </p>
                                <p className="hero-main-left-content-para">
                                    Learning about React and React Router is really really
                                    important if you want to get better at creating UIs.
                </p>
                            </a>
                        </div>
                    </div>

                    <div className="hero-main-right">
                        <div className="hero-main-right-title">
                            <div className="hero-main-right-properties">
                                <div className="hero-main-right-title-box">
                                    <div className="hero-main-right-icon-box">
                                        <button className="hero-main-right-back-btn">
                                            <img
                                                src="/images/back-arrow.png"
                                                alt="back-arrow"
                                                className="hero-main-right-back-arrow"
                                            ></img>
                                        </button>
                                        <button className="hero-main-right-label-btn">
                                            <img
                                                src="/images/forward.png"
                                                alt="label"
                                                className="hero-main-right-label-icon"
                                            ></img>
                                        </button>
                                        <button className="hero-main-right-label-btn">
                                            <img
                                                src="/images/user.png"
                                                alt="label"
                                                className="hero-main-right-label-icon"
                                            ></img>
                                        </button>
                                        <button className="hero-main-right-label-btn">
                                            <img
                                                src="/images/folder.png"
                                                alt="label"
                                                className="hero-main-right-label-icon"
                                            ></img>
                                        </button>
                                        <button className="hero-main-right-label-btn">
                                            <img
                                                src="/images/dot.png"
                                                alt="label"
                                                className="hero-main-right-label-icon"
                                            ></img>
                                        </button>
                                    </div>

                                    <div className="hero-main-right-next-btn">
                                        <button className="hero-main-right-arrow-down">
                                            <img
                                                src="/images/down-arrow.png"
                                                alt="label"
                                                className="hero-main-right-arrow-down-icon"
                                            ></img>
                                        </button>
                                        <button className="hero-main-right-arrow-up">
                                            <img
                                                src="/images/up-arrow.png"
                                                alt="label"
                                                className="hero-main-right-arrow-down-icon"
                                            ></img>
                                        </button>
                                    </div>
                                </div>
                                <div className="hero-main-right-heading">
                                    <span className="hero-main-right-heading-content">
                                        Re: Student Discount?Re: Student Discount?Re: Student
                                        Discount?Re: Student Discount?
                  </span>
                                    <div className="hero-main-right-heading-status">
                                        <span className="hero-main-right-heading-number">
                                            #148
                                    </span>
                                        <span className="hero-main-right-heading-number"></span>
                                        <button className="active">Active</button>
                                    </div>
                                </div>
                            </div>

                            <div className="hero-main-right-message">
                                <div className="scroll-bar">
                                    <div className="hero-main-right-message-allContent">
                                        <div className="hero-main-right-message-flex">
                                            <div className="hero-main-right-message-flex">
                                                <h4 className="hero-main-right-message-title">
                                                    Joe Armstrong
                          </h4>
                                                <span className="hero-main-right-message-sub-title">
                                                    wrote
                          </span>
                                            </div>
                                            <div className="hero-main-right-message-flex">
                                                <span className="hero-main-right-message-time">
                                                    Yesterday at 7:24AM
                          </span>
                                                <img
                                                    src="/images/avatar.jpeg"
                                                    // src="https://inboxui.netlify.com/images/avatar.jpeg"
                                                    alt="monaco pic"
                                                    className="header-left-pic"
                                                ></img>
                                            </div>
                                        </div>
                                        <p className="hero-main-right-message-para">
                                            The idea for a publication that chronicles the design
                                            and innovation ecosystem in India has been buzzing
                                            around in my head for a while, but we only got to work
                                            on it in July this year. Four and a half months later,
                                            we’re ready to share it with you with some trepidation
                                            and much excitement.
                      </p>
                                    </div>
                                    <div className="hero-main-right-message-allContent">
                                        <div className="hero-main-right-message-flex">
                                            <div className="hero-main-right-message-flex">
                                                <h4 className="hero-main-right-message-title">
                                                    Joe Armstrong
                          </h4>
                                                <span className="hero-main-right-message-sub-title">
                                                    wrote
                          </span>
                                            </div>
                                            <div className="hero-main-right-message-flex">
                                                <span className="hero-main-right-message-time">
                                                    Yesterday at 7:24AM
                          </span>
                                                <img
                                                    src="/images/avatar.jpeg"
                                                    // src="https://inboxui.netlify.com/images/avatar.jpeg"
                                                    alt="monaco pic"
                                                    className="header-left-pic"
                                                ></img>
                                            </div>
                                        </div>
                                        <p className="hero-main-right-message-para">
                                            The idea for a publication that chronicles the design
                                            and innovation ecosystem in India has been buzzing
                                            around in my head for a while, but we only got to work
                                            on it in July this year. Four and a half months later,
                                            we’re ready to share it with you with some trepidation
                                            and much excitement.
                      </p>
                                    </div>
                                    <div className="hero-main-right-message-allContent">
                                        <div className="hero-main-right-message-flex">
                                            <div className="hero-main-right-message-flex">
                                                <h4 className="hero-main-right-message-title">
                                                    Joe Armstrong
                          </h4>
                                                <span className="hero-main-right-message-sub-title">
                                                    wrote
                          </span>
                                            </div>
                                            <div className="hero-main-right-message-flex">
                                                <span className="hero-main-right-message-time">
                                                    Yesterday at 7:24AM
                          </span>
                                                <img
                                                    src="/images/avatar.jpeg"
                                                    // src="https://inboxui.netlify.com/images/avatar.jpeg"
                                                    alt="monaco pic"
                                                    className="header-left-pic"
                                                ></img>
                                            </div>
                                        </div>
                                        <p className="hero-main-right-message-para">
                                            The idea for a publication that chronicles the design
                                            and innovation ecosystem in India has been buzzing
                                            around in my head for a while, but we only got to work
                                            on it in July this year. Four and a half months later,
                                            we’re ready to share it with you with some trepidation
                                            and much excitement.
                      </p>
                                    </div>
                                    <div className="hero-main-right-message-allContent">
                                        <div className="hero-main-right-message-flex">
                                            <div className="hero-main-right-message-flex">
                                                <h4 className="hero-main-right-message-title">
                                                    Joe Armstrong
                          </h4>
                                                <span className="hero-main-right-message-sub-title">
                                                    wrote
                          </span>
                                            </div>
                                            <div className="hero-main-right-message-flex">
                                                <span className="hero-main-right-message-time">
                                                    Yesterday at 7:24AM
                          </span>
                                                <img
                                                    src="/images/avatar.jpeg"
                                                    // src="https://inboxui.netlify.com/images/avatar.jpeg"
                                                    alt="monaco pic"
                                                    className="header-left-pic"
                                                ></img>
                                            </div>
                                        </div>
                                        <p className="hero-main-right-message-para">
                                            The idea for a publication that chronicles the design
                                            and innovation ecosystem in India has been buzzing
                                            around in my head for a while, but we only got to work
                                            on it in July this year. Four and a half months later,
                                            we’re ready to share it with you with some trepidation
                                            and much excitement.
                      </p>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div>
                                    <div>
                                        <div>
                                            <div>
                                                <h4></h4>
                                                <span></span>
                                            </div>
                                            <div>
                                                <span></span>
                                                <image></image>
                                            </div>
                                        </div>
                                        <p></p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </>
    );
}

const root = document.getElementById("root");

ReactDOM.render(<UI />, root);

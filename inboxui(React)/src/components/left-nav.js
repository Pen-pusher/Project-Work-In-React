import React from "react";

function LeftNav() {
    return (
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

    )
}

export default LeftNav
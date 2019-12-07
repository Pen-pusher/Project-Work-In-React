import React from "react";

function Header() {
    return (
        <div className="header-height flex flex-column">
            <header className="flex flex-shrink">
                <div className="header-div main">
                    <button className="flex full-width justiy-content-sb center">
                        <span className="flex center">
                            <img
                                className="image"
                                src="/images/avatar.jpeg" alt="m"
                            />
                            <span className="span-2">Monaco White</span>
                        </span>
                    </button>
                </div>
                <div className="main">
                    <nav className="nav-wid">
                        <ul className="flex">
                            <li className="nav-i nav-mailbox-bg">Mailbox</li>
                            <li className="nav-i nav-margin">Customers</li>
                            <li className="nav-i nav-margin">Reporting</li>
                            <li className="nav-i nav-margin">Manage</li>
                        </ul>
                    </nav>
                    <div className="flex center">
                        <span className="search-span">
                            <span className="search-span-1 flex center">
                                <img className="search-image" src="/images/search.png" alt="search-img" />

                            </span>
                            <input className="search-input" type="text" placeholder="search" />
                        </span>
                    </div>
                </div>

            </header>

        </div>
    );
}

export default Header;

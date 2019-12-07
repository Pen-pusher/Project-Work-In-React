import React from "react";



function Header() {
    return (
        <div className="header">
            <div className=" wrapper ">
                <div className="flex ">
                    <img className=" logo-maker " src=" /images/logo.png" alt="logo " />
                    <div className="pro search-div">
                        <img className=" search-icon " src=" /images/search.svg" alt="search " />
                        <input type="text" placeholder="Discover New Things" id="search-input" />

                    </div>
                    <ul className="pro  pad">
                        <li className="pad">Deals</li>
                        <li className="pad">Jobs</li>
                        <li className="pad">Makers</li>
                        <li className="pad">radio</li>
                        <li className="pad">Ship</li>
                        <li className="pad">...</li>
                    </ul>
                    <div className="pro">
                        <button className=" login">login</button>
                        <button className=" sign ">SignUp</button>
                    </div>

                </div>
            </div>
        </div>

    )
}
export default Header;

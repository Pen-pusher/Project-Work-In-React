import React from "react";
import Right from "../components/right-side"

// function className(tag) {
//     return className = (tag)
// }

function Left() {
    return (
        <div className="">

            <div className="main-con flex ">
                <div className="left-con">
                    <div className="wid ">
                        <h3 className="ship">
                            Upcoming <span className="pow"> powered by ship</span>
                        </h3>
                    </div>
                    <div className="con wid">
                        <div>
                            <h2 className="follow">
                                Follow and support your future favorite products
            </h2>
                            <hr />
                            <div className="flex side">
                                <div className="">
                                    <img
                                        src="/images/logo1.jpg"
                                        className="logo-2 logo-maker"
                                        alt="logo-2"
                                    ></img>
                                </div>
                                <div className="">
                                    <h3 className="sense">Sense chat</h3>
                                    <h5 className="sub-color">Decentralized Text &amp; Video Chat Built on EOS</h5>
                                    <button className="sub flex-1">subscribe</button>
                                </div>
                            </div>
                            <hr />
                            <div className="flex side" >
                                <div className="">
                                    <img
                                        src="/images/logo2.jpg"
                                        className="logo-3 logo-maker"
                                        alt="logo-3"
                                    ></img>
                                </div>
                                <div>
                                    <h3 className="sense">Proficonf</h3>
                                    <h5 className="sub-color">The fastest video conferencing experience ever created.</h5>
                                    <button className="sub flex-1">subscribe</button>
                                </div>
                            </div>
                            <hr />
                            <div className="flex side">
                                <div className="">
                                    <img
                                        src="/images/logo3.jpg"
                                        className="logo-1 logo-maker"
                                        alt="logo-1"
                                    ></img>
                                </div>
                                <div>
                                    <h3 className="sense">Sphere</h3>
                                    <h5 className="sub-color">an app that powers &amp; scales the magic of coaching</h5>
                                    <button className="sub flex-1">subscribe</button>
                                </div>
                            </div>
                            <hr />
                            <div className="flex side" align="left">
                                <div className="">
                                    <img
                                        src="/images/1.gif"
                                        className="logo-1 logo-maker"
                                        alt="logo-1"
                                    ></img>
                                </div>
                                <div>
                                    <h3 className="sense">Exploding Topics</h3>
                                    <h5 className="sub-color">Find proven topics before they take off.</h5>
                                    <button className="sub flex-1">subscribe</button>
                                </div>
                            </div>
                            <hr />
                            <div className="flex side" align="left">
                                <div className="">
                                    <img
                                        src="/images/2.gif"
                                        className="logo-1 logo-maker"
                                        alt="logo-1"
                                    ></img>
                                </div>
                                <div>
                                    <h3 className="sense">Hyperise</h3>
                                    <h5 className="sub-color">2x your email CTR with dynamic personalised images.</h5>
                                    <button className="sub flex-1">subscribe</button>
                                </div>
                            </div>
                            <hr />
                            <div className="flex side" align="left">
                                <div className="">
                                    <img
                                        src="/images/3.gif"
                                        className="logo-1 logo-maker"
                                        alt="logo-1"
                                    ></img>
                                </div>
                                <div>
                                    <h3 className="sense">360 Learning</h3>
                                    <h5 className="sub-color">Create,ship & improve courses together.</h5>
                                    <button className="sub flex-1">subscribe</button>
                                </div>
                            </div>
                            <hr />

                            <div className="flex side">
                                <h4 className="view">view all projects</h4>
                                <h5>
                                    working on something ? <span>Discover ship</span>
                                </h5>
                            </div>
                        </div>
                    </div>
                </div>
                <Right />

            </div>

        </div>
    );
}

export default Left;

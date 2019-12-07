import React from "react";
import ReactDOM from "react-dom";
import "./assets/reset.scss";
import "./assets/main.scss";


function App() {
    return (
        <div className=" wrapper">
            <h3>TODO </h3>
            <input type="text" placeholder="what needs to be done ?" className="input"></input>
        </div>

    );
}

ReactDOM.render(<App />, document.getElementById("root"));

// {           //  <h1> {`${props.name}`}</h1>
//  <img className="img" src="/images/pic.jpg" alt="bike" />}

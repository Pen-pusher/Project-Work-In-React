import React from "react";
import ReactDOM from "react-dom";
import "./assets/reset.scss";
import "./assets/main.scss";
import Left from "./components/left-side"
import Header from "./components/header"



//  function App(){
//      return <h1>hello world</h1>
//  }
// we have to return only one parent with a component
function App() {
    return (
        <div className=" ">
            <Header />
            <div className="body">
                <div className="wrapper ">

                    <Left />

                </div>
            </div>


        </div>
    );
}

ReactDOM.render(<App />, document.getElementById("root"));

// {           //  <h1> {`${props.name}`}</h1>
//  <img className="img" src="/images/pic.jpg" alt="bike" />}

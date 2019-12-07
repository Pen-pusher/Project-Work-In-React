import React from "react";
import ReactDOM from "react-dom";
import "./assets/reset.scss";
import "./assets/main.scss";
import Javascript from "./components/whats-is-javascript";
import Variables from "./components/variables"
// import Data from "./components/Data-types"
// import Implicit from "./components/implicit-explicit"
// import Logical from "./components/logical-operator"
// import Ternary from "./components/ternary-operators"

// function View() {
    
    
    
    
//     return (
//         <div className="wrapper">
            
//         </div>
//     )
// }




class App extends React.Component {
    render() {
        return (
            <div>
                
                <Javascript />

            </div>
        )
    }

}




ReactDOM.render(<App />, document.getElementById("root"));

// {           //  <h1> {`${props.name}`}</h1>
//  <img className="img" src="/images/pic.jpg" alt="bike" />}

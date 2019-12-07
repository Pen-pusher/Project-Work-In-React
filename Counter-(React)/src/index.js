import React from "react";
import ReactDOM from "react-dom";
// import "./assets/reset.scss";
import "./assets/main.scss";


//  function App(){
//      return <h1>hello world</h1>
//  }
// we have to return only one parent with a component
class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: 0
        };
    }


    increment = () => {
        this.setState({
            counter: this.state.counter + 1
        });
    };

    decrement = () => {
        this.setState({
            counter: this.state.counter - 1
        });
    };
    reset = () => {
        this.setState({
            counter: 0
        });
    };


    render() {
        return (
            <div>
                <h2 className="input"> This Is Counter: {this.state.counter}</h2>
                <button onClick={this.increment} className="increment ">Increment</button>
                <button onClick={this.decrement} className="decrement ">Decrement</button>
                <button onClick={this.reset} className="reset ">Reset</button>

            </div>
        );
    }
}




class App extends React.Component {


    render() {


        return (
            <div className="main-container wrapper" >
                <Counter />
            </div>
        )
    }



}

ReactDOM.render(<App />, document.getElementById("root"));

// {           //  <h1> {`${props.name}`}</h1>
//  <img className="img" src="/images/pic.jpg" alt="bike" />}

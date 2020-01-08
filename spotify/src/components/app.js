import React from "react";
import ReactDOM from "react-dom";
import "../assets/reset.scss";
import "../assets/main.scss";
// const Me = props => {
//   return <h1>hello {props.name}</h1>;
// };

class Appp extends React.Component {
  state = {
    textValue: ""
  };

  handleChange = e => {
    this.setState({
      textValue: [e.target.value]
    });
    console.log(this.state.textValue);
  };

  render() {
    return (
      <div>
        <input
          type="text"
          onChange={this.handleChange}
          value={this.state.textValue}
          style={{ width: "300px", height: "300px" }}
        />
        <p>{this.state.textValue}</p>
      </div>
    );
  }
}

export default Appp;

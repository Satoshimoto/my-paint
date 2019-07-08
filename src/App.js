import React from "react";
import "./App.css";
import Navigation from "./components/Navigation";
import Canvas from "./components/Canvas";

class App extends React.Component {
  state = {
    activeTool: "pen",
    activeSize: 1,
    activeColor: "color--black"
  };

  handleActiveTool = e => {
    let tools = document.querySelectorAll(".navigation__tools .tool");
    tools = [...tools];
    tools.forEach(item => {
      if (item === e.currentTarget) {
        item.style.backgroundColor = "lightgray";
      } else {
        item.style.backgroundColor = "";
      }
    });

    this.setState({
      activeTool: e.currentTarget.classList[1]
    });
  };

  handleActiveSize = e => {
    if (e.currentTarget.value < 0) {
      e.currentTarget.value = 1;
    } else if (e.currentTarget.value > 30) {
      e.currentTarget.value = 30;
    } else if (e.currentTarget.value === "") {
      e.currentTarget.value = 1;
    }

    this.setState({
      activeSize: e.currentTarget.value
    });
  };

  handleActiveColor = e => {
    let colors = document.querySelectorAll(".properties__colors .color");
    colors = [...colors];

    colors.forEach(item => {
      if (item === e.currentTarget) {
        item.style.boxShadow = "0px 0px 10px 5px white";
      } else {
        item.style.boxShadow = "0px 0px 0px 0px";
      }
    });

    this.setState({
      activeColor: e.currentTarget.classList[1]
    });
  };

  render() {
    return (
      <>
        <Navigation
          setActiveTool={this.handleActiveTool}
          setActiveSize={this.handleActiveSize}
          setActiveColor={this.handleActiveColor}
        />
        <Canvas />
      </>
    );
  }
}

export default App;

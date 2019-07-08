import React from "react";
import "./App.css";
import Navigation from "./components/Navigation";
import Canvas from "./components/Canvas";

class App extends React.Component {
  state = {
    activeTool: "pen",
    activeSize: 1,
    activeColor: "color--black",
    canvasWidth: "",
    canvasHeight: "",
    created: false,
    createStep: 0
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

  handleCreateCanvas = e => {
    let container = document.querySelector(".container");

    if (e.currentTarget.classList[0] === "add") {
      this.setState({
        createStep: 1
      });
    }
    if (e.currentTarget.classList[0] === "container__properties--button") {
      let width = document.querySelector(".width").value;
      let height = document.querySelector(".height").value;

      if (height === "") {
        height = 50;
      }

      if (width === "") {
        width = 50;
      }

      this.setState({
        createStep: 0,
        created: true,
        canvasWidth: width + "px",
        canvasHeight: height + "px"
      });
    }
  };

  handleCanvasDimensions = e => {
    if (e.currentTarget.classList[1] === "width") {
      if (e.currentTarget.value < 50) {
        e.currentTarget.value = 50;
      } else if (e.currentTarget.value > 2000) {
        e.currentTarget.value = 2000;
      }
      this.setState({
        canvasWidth: e.currentTarget.value
      });
    } else {
      if (e.currentTarget.value < 50) {
        e.currentTarget.value = 50;
      } else if (e.currentTarget.value > 2000) {
        e.currentTarget.value = 2000;
      }
      this.setState({
        canvasHeight: e.currentTarget.value
      });
    }
  };

  render() {
    return (
      <>
        <Navigation
          setActiveTool={this.handleActiveTool}
          setActiveSize={this.handleActiveSize}
          setActiveColor={this.handleActiveColor}
        />
        <Canvas
          step={this.state.createStep}
          create={this.handleCreateCanvas}
          created={this.state.created}
          setDimensions={this.handleCanvasDimensions}
        />
      </>
    );
  }
}

export default App;

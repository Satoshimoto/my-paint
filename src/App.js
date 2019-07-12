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
    createStep: 0,
    backgroundColor: "white"
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
    } else if (e.currentTarget.value > 50) {
      e.currentTarget.value = 50;
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
    if (e.currentTarget.classList[0] === "add") {
      this.setState({
        createStep: 1
      });
    }
    if (e.currentTarget.classList[0] === "container__properties--button") {
      let width = document.querySelector(".width").value;
      let height = document.querySelector(".height").value;

      if (height === "") {
        height = 10;
      } else if (height < 10) {
        height = 10;
      } else if (height > 2000) {
        height = 2000;
      }

      if (width === "") {
        width = 10;
      } else if (width < 10) {
        width = 10;
      } else if (width > 2000) {
        width = 2000;
      }

      this.setState({
        createStep: 0,
        created: true,
        canvasWidth: width + "px",
        canvasHeight: height + "px"
      });
    }
  };

  handleChangeBackground = () => {
    let select = document.querySelector("select");

    this.setState({
      backgroundColor: select.value
    });
  };

  handleDeleteCanvas = () => {
    this.setState({
      created: false,
      createStep: 0,
      canvasWidth: "",
      canvasHeight: "",
      background: "white"
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
        <Canvas
          step={this.state.createStep}
          create={this.handleCreateCanvas}
          created={this.state.created}
          canvasWidth={this.state.canvasWidth}
          canvasHeight={this.state.canvasHeight}
          activeTool={this.state.activeTool}
          activeSize={this.state.activeSize}
          activeColor={this.state.activeColor}
          changeBackground={this.handleChangeBackground}
          background={this.state.backgroundColor}
          deleteCanvas={this.handleDeleteCanvas}
        />
      </>
    );
  }
}

export default App;

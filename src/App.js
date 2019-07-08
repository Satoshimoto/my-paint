import React from "react";
import "./App.css";
import Navigation from "./components/Navigation";

class App extends React.Component {
  state = {
    activeTool: "pen",
    activeSize: 1,
    activeColor: []
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
  render() {
    return (
      <>
        <Navigation
          setActiveTool={this.handleActiveTool}
          setActiveSize={this.handleActiveSize}
        />
      </>
    );
  }
}

export default App;

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
  render() {
    return (
      <>
        <Navigation
          setActiveTool={this.handleActiveTool}
        />
      </>
    );
  }
}

export default App;

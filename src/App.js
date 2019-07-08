import React from "react";
import "./App.css";
import Navigation from "./components/Navigation";

class App extends React.Component {
  state = {
    activeTool: "pen",
    activeSize: 1,
    activeColor: []
 }
  render() {
    return (
      <>
        <Navigation
        />
      </>
    );
  }
}

export default App;

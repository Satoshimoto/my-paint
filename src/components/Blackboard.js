import React from "react";
import "../scss/Blackboard.scss";

class Blackboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      number: 1,
      clicked: false
    };
  }

  setColor = activeColor => {
    switch (activeColor) {
      case "color--blue":
        return "blue";

      case "color--green":
        return "green";

      case "color--yellow":
        return "yellow";

      case "color-black":
        return "black";

      case "color--orange":
        return "orange";

      case "color--red":
        return "red";

      case "color--white":
        return "white";

      default:
        return "black";
    }
  };

  handleClick = e => {
    let canvas = document.querySelector(".canvas");
    let ctx = canvas.getContext("2d");

    let mouseX = e.pageX + canvas.width / 2 + 2 - canvas.offsetLeft;
    let mouseY = e.pageY + canvas.height / 2 + 2 - canvas.offsetTop;

    let activeTool = this.props.activeTool;
    let activeSize = this.props.activeSize;
    let activeColor = this.setColor(this.props.activeColor);

    ctx.fillStyle = activeColor;
    ctx.strokeStyle = activeColor;

    if (activeTool === "pen") {
      this.setState({
        clicked: true
      });
    } else if (activeTool === "square") {
      ctx.beginPath();
      ctx.rect(mouseX, mouseY, activeSize, activeSize);
      ctx.stroke();
      ctx.closePath();
    } else if (activeTool === "f-square") {
      ctx.beginPath();
      ctx.fillRect(mouseX, mouseY, activeSize, activeSize);
      ctx.closePath();
    } else if (activeTool === "circle") {
      ctx.beginPath();
      ctx.arc(mouseX, mouseY, activeSize, 0, 2 * Math.PI);
      ctx.stroke();
      ctx.closePath();
    } else if (activeTool === "f-circle") {
      ctx.beginPath();
      ctx.arc(mouseX, mouseY, activeSize, 0, 2 * Math.PI);
      ctx.fill();
      ctx.closePath();
    } else if (activeTool === "star") {
      this.setState({
        clicked: true
      });
    }
  };

  handleMouseUp = () => {
    this.setState({
      clicked: false
    });
  };

  handleDrawing = e => {
    if (this.state.clicked) {
      let canvas = document.querySelector(".canvas");
      let ctx = canvas.getContext("2d");

      let mouseX = e.pageX + canvas.width / 2 + 2 - canvas.offsetLeft;
      let mouseY = e.pageY + canvas.height / 2 + 2 - canvas.offsetTop;

      let activeTool = this.props.activeTool;
      let activeSize = this.props.activeSize;

      if (activeTool === "pen") {
        ctx.beginPath();
        ctx.fillRect(mouseX, mouseY, activeSize, activeSize);
        ctx.closePath();
      }
    }
  };

  render() {
    return (
      <>
        <canvas
          width={this.props.width}
          height={this.props.height}
          className="canvas"
          onMouseDown={e => this.handleClick(e)}
          onMouseUp={this.handleMouseUp}
          onMouseMove={e => this.handleDrawing(e)}
          style={{ background: `${this.props.background}` }}
        />
      </>
    );
  }
}

export default Blackboard;

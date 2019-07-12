import React from "react";
import "../scss/Canvas.scss";
import Blackboard from "./Blackboard";
import html2canvas from "html2canvas";

const Canvas = props => {
  function handleSwitchMode() {
    let container = document.querySelector(".container");
    let header = document.querySelector(".container__header");
    let switchContainer = document.querySelector(".switch");
    let switchMode = document.querySelector(".switch .switch--mode");

    if (switchMode.offsetLeft === 4) {
      switchMode.style.left = "30px";
      switchContainer.style.backgroundColor = "#187ac6";
      container.style.backgroundColor = "#333";
      header.style.color = "#fff";
    } else {
      switchMode.style.left = "4px";
      switchContainer.style.backgroundColor = "#ccc";
      container.style.backgroundColor = "#fff";
      header.style.color = "#000";
    }
  }

  function handleClearCanvas() {
    let canvas = document.querySelector(".canvas");
    let ctx = canvas.getContext("2d");
    let saveBtn = document.querySelector(".downloadBtn");
    saveBtn.href = "";

    ctx.beginPath();
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.closePath();
  }

  function handleSaveCanvas() {
    let canvas = document.querySelector(".canvas");
    canvas.style.border = "0px solid";
    let download = document.querySelector(".downloadBtn");

    html2canvas(canvas).then(canvas => {
      let image = canvas.toDataURL("image/png");
      download.href = image;
    });
    canvas.style.border = "2px solid black";
    setTimeout(() => {
      download.click();
    }, 500);
  }

  function showInstruction() {
    alert(
      "Quick guide how to use my_paint. First step is to create new canvas. After created canvas, select tool which you prefer. Each tool has different way of use. If you choose rubber or pen then you have to click right mouse button on canvas and moving your mouse. In other tools just click right mouse on canvas"
    );
  }

  return (
    <>
      <div className="container">
        <h3 className="container__header">Dark mode</h3>
        <div className="switch" onClick={handleSwitchMode}>
          <span className="switch--mode" />
        </div>
        <div className="container__info" onClick={showInstruction}>
          <i className="fas fa-info" />
        </div>
        {props.created ? (
          <>
            <div className="container__clearBtn" onClick={handleClearCanvas}>
              Clear canvas
            </div>
            <div className="container__deleteBtn" onClick={props.deleteCanvas}>
              <i className="far fa-trash-alt" /> Delete canvas
            </div>
            <div className="container__saveBtn" onClick={handleSaveCanvas}>
              Save as png
            </div>
            <a
              href="http://www.myfolio.pl/"
              download="my_paint.jpg"
              className="downloadBtn"
              style={{ display: "none" }}
            >
              .
            </a>
          </>
        ) : null}

        {props.step === 0 && !props.created ? (
          <div className="container__create">
            <div className="add" onClick={e => props.create(e)}>
              <i className="fas fa-plus" />
              <h4>Create new canvas</h4>
            </div>
          </div>
        ) : props.step === 1 && !props.created ? (
          <div className="container__create">
            <div className="container__properties">
              <p>Canvas Width:</p>
              <input
                type="number"
                max="2000"
                className="container__properties--input width"
                placeholder="10px - 2000px"
              />
            </div>
            <div className="container__properties">
              <p className="container__properties"> Canvas Height:</p>
              <input
                type="number"
                max="2000"
                className="container__properties--input height"
                placeholder="10px - 2000px"
              />
            </div>

            <div className="container__properties">
              <p className="container__properties"> Canvas background color:</p>
              <select name="bcgList" onChange={props.changeBackground}>
                <option value="white">White</option>
                <option value="black">Black</option>
              </select>
            </div>

            <p className="warning">
              You have to set size of canvas. Minium size is 10px, maximum size
              is 2000px
            </p>
            <div
              className="container__properties--button"
              onClick={e => props.create(e)}
            >
              <p>Create</p>
            </div>
          </div>
        ) : null}

        {props.created ? (
          <Blackboard
            width={props.canvasWidth}
            height={props.canvasHeight}
            activeTool={props.activeTool}
            activeColor={props.activeColor}
            activeSize={props.activeSize}
            background={props.background}
          />
        ) : null}
      </div>
    </>
  );
};

export default Canvas;

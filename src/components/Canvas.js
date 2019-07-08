import React from "react";
import "../scss/Canvas.scss";

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

  return (
    <>
      <div className="container">
        <h3 className="container__header">Dark mode</h3>
        <div className="switch" onClick={handleSwitchMode}>
          <span className="switch--mode" />
        </div>

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
                min="50"
                max="2000"
                className="container__properties--input width"
                onChange={e => props.setDimensions(e)}
              />
            </div>
            <div className="container__properties">
              <p className="container__properties"> Canvas Height:</p>
              <input
                type="number"
                min="50"
                max="2000"
                className="container__properties--input height"
                onChange={e => props.setDimensions(e)}
              />
            </div>

            <div
              className="container__properties--button"
              onClick={e => props.create(e)}
            >
              <p>Create</p>
            </div>
          </div>
        ) : null}
      </div>
    </>
  );
};

export default Canvas;

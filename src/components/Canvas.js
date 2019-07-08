import React from "react";
import "../scss/Canvas.scss";

const Canvas = () => {
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
      </div>
    </>
  );
};

export default Canvas;

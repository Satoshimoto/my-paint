import React from "react";
import "../scss/Canvas.scss";

const Canvas = () => {
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

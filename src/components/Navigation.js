import React from "react";
import "../scss/Navigation.scss";

const Navigation = props => {
  function handleNavigation() {
    let header = document.querySelector(".header");
    let grasper = document.querySelector(".header .header__grasper");
    let grasperArrow = document.querySelector(
      ".header__grasper .header__grasper--arrow"
    );
    let tools = document.querySelector(".navigation .navigation__tools");
    let properties = document.querySelector(".navigation__properties");

    if (header.offsetWidth === 15) {
      header.style.width = "200px";
      grasper.style.left = "185px";
      tools.style.display = "flex";
      properties.style.display = "block";
      grasperArrow.style.animation = "grasperOpen 0.4s forwards ease-in-out";
    } else {
      header.style.width = "15px";
      grasper.style.left = "0px";
      tools.style.display = "none";
      properties.style.display = "none";
      grasperArrow.style.animation = "grasperClose 0.4s forwards ease-in-out";
    }
  }

  return (
    <>
      <header className="header">
        <div className="header__grasper" onClick={handleNavigation}>
          <i className="fas fa-caret-right header__grasper--arrow " />
        </div>
        <nav className="navigation">
          <ul className="navigation__tools">
            <li className="tool square" onClick={e => props.setActiveTool(e)}>
              <i className="far fa-square" />
            </li>
            <li className="tool f-square" onClick={e => props.setActiveTool(e)}>
              <i className="fas fa-square" />
            </li>
            <li className="tool circle" onClick={e => props.setActiveTool(e)}>
              <i className="far fa-circle" />
            </li>
            <li className="tool f-circle" onClick={e => props.setActiveTool(e)}>
              <i className="fas fa-circle" />
            </li>
            <li className="tool star" onClick={e => props.setActiveTool(e)}>
              <i className="far fa-star" />
            </li>
            <li
              className="tool pen"
              style={{ backgroundColor: "lightgray" }}
              onClick={e => props.setActiveTool(e)}
            >
              <i className="fas fa-pencil-alt" />
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default Navigation;

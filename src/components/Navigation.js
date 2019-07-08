import React from "react";
import "../scss/Navigation.scss";

const Navigation = props => {
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

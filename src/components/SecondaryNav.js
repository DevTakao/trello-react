import React from "react";
import "./SecondaryNav.css";

function SecondaryNav() {
  return (
    <nav className="navbar navbar-expand secondarynav">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item">
          <div className="trans-buttons">
            <span id="boardName">Trello Clone</span>
            <a className="nav-link" href="##">
              <i className="far fa-star"></i>
            </a>
          </div>
        </li>
        <span className="ml-1 mr-1">|</span>
        <li className="nav-item ml-1 mr-1">
          <div className="trans-buttons">
            <span>Private Team</span>
          </div>
        </li>
        <span className="ml-1 mr-1">|</span>
        <li className="nav-item">
          <div className="trans-buttons">
            <a className="nav-link" style={{ fontWeight: "normal" }} href="##">
              {" "}
              <i className="fa fa-group"></i> Team Visible
            </a>
          </div>
        </li>
        <span className="ml-1 mr-1">|</span>
        <li>
          <div className="trans-buttons">{/* account avatars here */}</div>
        </li>
        <li className="nav-item ml-1">
          <div className="trans-buttons">
            <a className="nav-link" style={{ fontWeight: "normal" }} href="##">
              Invite
            </a>
          </div>
        </li>
      </ul>
      <ul className="navbar-nav d-flex align-items-end">
        <li className="nav-item">
          <div className="trans-buttons">
            <a className="nav-link" style={{ fontWeight: "normal" }} href="##">
              <i className="fas fa-concierge-bell"></i> Butler (1 Tip){" "}
            </a>
          </div>
        </li>
        <li className="nav-item">
          <div className="trans-buttons">
            <a className="nav-link" style={{ fontWeight: "normal" }} href="##">
              <span className="small">&bull;&bull;&bull;</span> Show Menu
            </a>
          </div>
        </li>
      </ul>
    </nav>
  );
}

export default SecondaryNav;

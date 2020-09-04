import React from "react";
import Loader from "./Loader";

function PrimaryNav({ isLoading }) {
  return (
    <nav className="navbar navbar-expand">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item">
          <div className="trans-buttons">
            <a className="nav-link" href="#">
              <i className="fas fa-th"></i>
            </a>
          </div>
        </li>
        <li className="nav-item">
          <div className="trans-buttons">
            <a className="nav-link" href="#">
              <i className="fas fa-home"></i>
            </a>
          </div>
        </li>
        <li className="nav-item">
          <div className="trans-buttons">
            <a className="nav-link" href="#">
              <i className="fab fa-trello"></i> Boards
            </a>
          </div>
        </li>
        <li className="nav-item">
          <div className="trans-buttons d-inline-flex" id="searchField">
            <input type="text" name="search" value="" />
            <i className="fas fa-search showOnInit"></i>
            <i className="fas fa-share showOnFocus"></i>
            <i className="fas fa-times showOnFocus"></i>
          </div>
        </li>
      </ul>
      {!isLoading ? (
        <a
          className="nav-link logo"
          id="logo"
          style={{ display: "block" }}
          href="#"
        >
          <i className="fab fa-trello"></i>Trello
        </a>
      ) : (
        <Loader />
      )}
      <ul className="navbar-nav d-flex align-items-end">
        <li className="nav-item">
          <div className="trans-buttons">
            <a className="nav-link" href="#">
              <i className="fas fa-plus"></i>
            </a>
          </div>
        </li>
        <li className="nav-item">
          <div className="trans-buttons">
            <a className="nav-link" href="#">
              <i className="fas fa-info-circle"></i>
            </a>
          </div>
        </li>
        <li className="nav-item">
          <div className="trans-buttons">
            <a className="nav-link" href="#">
              <i className="fas fa-bell"></i>
            </a>
          </div>
        </li>
        <li className="nav-item">
          <div className="trans-buttons">
            <a href="#" style={{ border: "none", display: "block" }}>
              <img
                src="https://www.w3schools.com/howto/img_avatar.png"
                style={{ height: "100%", borderRadius: "50%" }}
                alt="avatar"
              />
            </a>
          </div>
        </li>
      </ul>
    </nav>
  );
}

export default PrimaryNav;

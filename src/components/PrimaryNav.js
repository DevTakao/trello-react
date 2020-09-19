import React from "react";
import Loader from "./Loader";
import { useState, useContext } from "react";
import { UserLoading } from "../App";
import "./PrimaryNav.css";

function PrimaryNav() {
  const { isLoading } = useContext(UserLoading); //Consuming Loading Context

  const [searchInput, setSearchInput] = useState("");
  return (
    <nav className="navbar navbar-expand">
      <ul className="navbar-nav mr-auto">
        <li className="nav-item">
          <div className="trans-buttons">
            <a className="nav-link" href="##">
              <i className="fas fa-th" />
            </a>
          </div>
        </li>
        <li className="nav-item">
          <div className="trans-buttons">
            <a className="nav-link" href="##">
              <i className="fas fa-home" />
            </a>
          </div>
        </li>
        <li className="nav-item">
          <div className="trans-buttons">
            <a className="nav-link" href="##">
              <i className="fab fa-trello" /> Boards
            </a>
          </div>
        </li>
        <li className="nav-item">
          <div className="trans-buttons d-inline-flex" id="searchField">
            <input
              type="text"
              name="search"
              value={searchInput}
              onChange={(e) => setSearchInput(e.target.value)}
            />
            <i className="fas fa-search showOnInit" />
            <i className="fas fa-share showOnFocus" />
            <i className="fas fa-times showOnFocus" />
          </div>
        </li>
      </ul>

      {/* Loading Animation */}
      {!isLoading ? (
        <a
          className="nav-link logo"
          id="logo"
          style={{ display: "block" }}
          href="##"
        >
          <i className="fab fa-trello" />
          Trello
        </a>
      ) : (
        <Loader />
      )}

      <ul className="navbar-nav d-flex align-items-end">
        <li className="nav-item">
          <div className="trans-buttons">
            <a className="nav-link" href="##">
              <i className="fas fa-plus" />
            </a>
          </div>
        </li>
        <li className="nav-item">
          <div className="trans-buttons">
            <a className="nav-link" href="##">
              <i className="fas fa-info-circle" />
            </a>
          </div>
        </li>
        <li className="nav-item">
          <div className="trans-buttons">
            <a className="nav-link" href="##">
              <i className="fas fa-bell" />
            </a>
          </div>
        </li>
        <li className="nav-item">
          <div className="trans-buttons">
            <a
              href="##"
              style={{
                border: "none",
                display: "block",
                backgroundColor: "transparent",
              }}
            >
              <img
                src="https://w3schools.com/w3images/avatar2.png"
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

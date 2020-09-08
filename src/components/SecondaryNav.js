import React, { useState, useEffect } from "react";
import "./SecondaryNav.css";
import axios from "axios";
import SmolUserBall from "./SmolUserBall";
import SmolUserBallTail from "./SmolUserBallTail";

function SecondaryNav() {
  const [accounts, setAccounts] = useState([]);
  useEffect(() => {
    const fetchAccounts = async () => {
      await axios
        .get("https://trello-clone-ppm.herokuapp.com/account")
        .then((res) => {
          setAccounts([...res.data]);
        })
        .catch((err) => {
          setAccounts([]);
          console.log(err);
        });
    };
    fetchAccounts();
  }, []);

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
          <div className="trans-buttons">
            {!!accounts.length &&
              (accounts.length > 5
                ? accounts.slice(0, 5)
                : accounts
              ).map((acc) => (
                <SmolUserBall key={acc.username} name={acc.name} />
              ))}
            {accounts.length > 5 && (
              <SmolUserBallTail count={accounts.length - 5} />
            )}
          </div>
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

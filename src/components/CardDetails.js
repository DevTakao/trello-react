import React from "react";
import ReactDOM from "react-dom";
import "./CardDetails.css";

function CardDetails() {
  return ReactDOM.createPortal(
    <div className="CardDetails bg-light container-fluid p-3">
      <div className="row details-head mb-3">
        <div className="col-12">
          <h5>
            <i className="fa fa-credit-card mr-1"></i> Trello Clone (React)
          </h5>
          <ul className="contentbox">
            <li>
              <p>
                in list{" "}
                <span style={{ textDecoration: "underline" }}>Backlog</span>
              </p>
            </li>
          </ul>
        </div>
      </div>
      <div className="row details-body">
        <div className="col-9">
          <ul className="contentbox">
            <li>
              <p>LABELS</p>
            </li>
            <li className="d-inline-flex align-items-stretch">
              <span className="label mr-1 py-1 px-2 d-inline-flex align-items-center">
                Learn
              </span>
              <button className="details-btn">
                <i className="fa fa-plus"></i>
              </button>
            </li>
          </ul>
          <h6 className="mt-4">
            <i className="fa fa-align-left mr-1"></i> Description
          </h6>
          <ul className="contentbox">
            <li>
              <p>This is the card description.</p>
            </li>
          </ul>
        </div>
        <div className="col-3 d-flex flex-column">
          <div className="btn btn-primary my-1">button</div>
          <div className="btn btn-primary my-1">button</div>
          <div className="btn btn-primary my-1">button</div>
          <div className="btn btn-primary my-1">button</div>
          <div className="btn btn-primary my-1">button</div>
          <div className="btn btn-primary my-1">button</div>
          <div className="btn btn-primary my-1">button</div>
          <div className="btn btn-primary my-1">button</div>
          <div className="btn btn-primary my-1">button</div>
          <div className="btn btn-primary my-1">button</div>
          <div className="btn btn-primary my-1">button</div>
          <div className="btn btn-primary my-1">button</div>
          <div className="btn btn-primary my-1">button</div>
          <div className="btn btn-primary my-1">button</div>
          <div className="btn btn-primary my-1">button</div>
          <div className="btn btn-primary my-1">button</div>
          <div className="btn btn-primary my-1">button</div>
          <div className="btn btn-primary my-1">button</div>
        </div>
      </div>
    </div>,
    document.getElementById("modal-root")
  );
}

export default CardDetails;

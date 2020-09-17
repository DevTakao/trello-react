import React, { useState } from "react";
import ReactDOM from "react-dom";
import "./CardDetails.css";

function CardDetails() {
  const [commentValue, setCommentValue] = useState("");
  return ReactDOM.createPortal(
    <div className="CardDetails bg-light container-fluid p-4">
      <div className="row details-head mb-3">
        <div className="col-12">
          <i className="fa fa-credit-card content-icon"></i>
          <h5 className="card-title">Trello Clone (React)</h5>
          <p className="content-text">
            in list <span className="attached-list">Backlog</span>
          </p>
        </div>
      </div>
      <div className="row details-body">
        <div className="col-9">
          <p className="labels-title content-text">LABELS</p>
          <div className="d-inline-flex content-text label-section">
            <span className="label label-project d-inline-flex align-items-center">
              Project
            </span>
            <button className="details-btn">
              <i className="fa fa-plus"></i>
            </button>
          </div>
          <div className="desc-section mt-4">
            <div className="desc-head d-inline-flex align-items-baseline">
              <i className="fa fa-align-left content-icon align-self-center"></i>
              <h6 className="desc-title">Description</h6>
              <button className="details-btn ml-2">Edit</button>
            </div>
            <p className="content-text mt-3">
              Create your own GitHub repo named trello-react. Now start
              committing your code and attached your repo here. Copy this card
              to Trello React list and assign yourself. Move to Done list when
              finished.
            </p>
          </div>
          <div className="activity-section mt-4">
            <div className="activity-head d-flex align-items-baseline">
              <i className="fas fa-tasks content-icon align-self-center"></i>
              <div className="d-flex w-100 justify-content-between align-items-baseline">
                <h6 className="activity-title">Activity</h6>
                <button className="details-btn activity-btn">
                  Show Details
                </button>
              </div>
            </div>
          </div>
          <div className="comment-section mt-4">
            <input
              className="comment-input content-text"
              type="text"
              placeholder="Write a comment..."
              value={commentValue}
              onChange={(e) => setCommentValue(e.target.value)}
            />
          </div>
        </div>
        <div className="col-3 d-flex flex-column">
          <div className="d-flex justify-content-between align-items-center">
            <span>Suggested</span>
            <button className="details-btn tiny-gear">
              <i className="fa fa-gear"></i>
            </button>
          </div>
          <button className="details-btn dsb">
            <i className="fas fa-user"></i> Join
          </button>
        </div>
      </div>
    </div>,
    document.getElementById("modal-root")
  );
}

export default CardDetails;

import React, { useContext, useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { CardView } from "../App";
import "./CardDetails.css";

function CardDetails() {
  const [commentValue, setCommentValue] = useState("");
  const setCardView = useContext(CardView);
  useEffect(() => {
    document.getElementById("modal-root").classList.add("modal-root-render");
    document.getElementById("root").classList.add("root-darken");
    return () => {
      document
        .getElementById("modal-root")
        .classList.remove("modal-root-render");
      document.getElementById("root").classList.remove("root-darken");
    };
  }, []);

  return ReactDOM.createPortal(
    <div className="CardDetails container-fluid p-4">
      <div className="row details-head mb-3">
        <div className="col-12">
          <i
            className="fa fa-close card-close-btn"
            onClick={() => setCardView(false)}
          ></i>
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
        <div className="col-3 d-flex flex-column details-side-sector">
          <div className="d-flex justify-content-between align-items-center">
            <span className="dsb-title">Suggested</span>
            <button className="details-btn tiny-gear">
              <i className="fa fa-gear"></i>
            </button>
          </div>
          <button className="details-btn dsb">
            <i className="fas fa-user"></i> Join
          </button>
          <a href="##" className="feedBack">
            Feedback
          </a>
          <span className="dsb-title">Add To Card</span>
          <button className="details-btn dsb">
            <i className="fas fa-user-plus"></i> Members
          </button>
          <button className="details-btn dsb">
            <i className="fas fa-tags"></i> Labels
          </button>
          <button className="details-btn dsb">
            <i className="fa fa-check-square-o"></i> Checklist
          </button>
          <button className="details-btn dsb">
            <i className="far fa-calendar-check"></i> Due Date
          </button>
          <button className="details-btn dsb">
            <i className="fas fa-paperclip"></i> Attachment
          </button>
          <button className="details-btn dsb">
            <i className="fa fa-photo"></i> Cover
          </button>
          <span className="dsb-title">Power-Ups</span>
          <button className="details-btn dsb">
            <i className="fas fa-concierge-bell"></i> Butler Tip (1)
          </button>
          <button className="details-btn dsb">
            <i className="fa fa-github"></i> GitHub
          </button>
          <button className="details-btn dsb">
            <i className="fa fa-plus"></i> Add Power-up ...
          </button>
          <span className="dsb-title">Actions</span>
          <button className="details-btn dsb">
            <i className="fas fa-arrow-right"></i> Move
          </button>
          <button className="details-btn dsb">
            <i className="	far fa-copy"></i> Copy
          </button>
          <button className="details-btn dsb">
            <i className="fas fa-file-import"></i> Make Template
          </button>
          <button className="details-btn dsb">
            <i className="fas fa-eye"></i> Watch
          </button>
          <hr className="my-4"></hr>
          <button className="details-btn dsb">
            <i className="fas fa-file-archive"></i> Archive
          </button>
          <button className="details-btn dsb">
            <i className="fas fa-share-alt"></i> Share
          </button>
        </div>
      </div>
    </div>,
    document.getElementById("modal-root")
  );
}

export default CardDetails;

import React from "react";
import ReactDOM from "react-dom";
import "./CardDetails.css";

function CardDetails() {
  return ReactDOM.createPortal(
    <div className="CardDetails bg-light container-fluid">
      <div className="row details-head">
        <div className="col-12">
          <h3>Header</h3>
          <p>Web Resource Reference</p>
        </div>
      </div>
      <div className="row details-body">
        <div className="col-9">content</div>
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

import React from "react";
import ReactDOM from "react-dom";
import "./CardDetails.css";

function CardDetails() {
  return ReactDOM.createPortal(
    <div className="CardDetails bg-light">
      <h1>Welcome to modal.</h1>
    </div>,
    document.getElementById("modal-root")
  );
}

export default CardDetails;

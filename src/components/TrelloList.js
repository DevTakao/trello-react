import React from "react";

function TrelloList({ list }) {
  return (
    <div
      className="card-list bg-dark pl-2 pr-2 py-2 mr-3 mb-2 align-self-start field-element"
      id="138"
    >
      <div className="list-head d-flex justify-content-between">
        <h5 className="">{list.title}</h5>
        <span className="more-options-button small" onClick={() => {}}>
          •••
        </span>
      </div>
      <div className="list-body">{/* Card data here */}</div>
      <div className="list-tail mt-2 ml-1 d-flex flex-row justify-content-between">
        <span className="list-tail-btn">
          <i className="fas fa-plus small" aria-hidden="true"></i> Add Another
          Card
        </span>
        <span className="list-tail-btn">
          <i className="fas fa-file-export small" aria-hidden="true"></i>
        </span>
      </div>
    </div>
  );
}

export default TrelloList;

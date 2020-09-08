import React from "react";
import "./AddNewList.css";

function AddNewList({ setShowNewListInput }) {
  return (
    <div
      className="align-self-start"
      style={{ borderRight: "16px solid transparent", display: "block" }}
      id="newListBtn-wrapper"
    >
      <div
        className="mt-2"
        onClick={() => setShowNewListInput(true)}
        id="newListBtn"
      >
        <div className="w-100 px-2 field-element closeNewListInput">
          <i className="fas fa-plus small" aria-hidden="true"></i> Add Another
          List
        </div>
      </div>
    </div>
  );
}

export default AddNewList;

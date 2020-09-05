import React from "react";

function AddNewList() {
  return (
    <div
      className="align-self-start"
      style={{ borderRight: "16px solid transparent", display: "block" }}
      id="newListBtn-wrapper"
    >
      <div className="mt-2" onClick={() => {}} id="newListBtn">
        <a className="w-100 px-2 field-element" href="##">
          <i className="fas fa-plus small" aria-hidden="true"></i> Add Another
          List
        </a>
      </div>
    </div>
  );
}

export default AddNewList;

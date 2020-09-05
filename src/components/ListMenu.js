import React from "react";
import "./ListMenu.css";

function ListMenu() {
  return (
    <div className="ListMenu">
      <div className="listmenu-container container d-flex flex-column py-3">
        <div className="row listmenu-head">
          <div className="text-center col-12">List Actions</div>
          <div className="col-2 text-center listmenu-close-btn">
            <i className="fa fa-close"></i>{" "}
          </div>
        </div>
        <div className="row listmenu-head-hr">
          <div className="text-center col-12">
            <hr />
          </div>
        </div>
        <div className="row flex-column listmenu-body1">
          <div className="col-12">
            <div className="listmenu-body-btn listmenu-btn">Add Card...</div>
            <div className="listmenu-body-btn listmenu-btn">Copy List...</div>
            <div className="listmenu-body-btn listmenu-btn">Move List...</div>
            <div className="listmenu-body-btn listmenu-btn">Watch</div>
            <hr />
          </div>
        </div>
        <div className="row listmenu-body2">
          <div className="col-12">
            <div className="listmenu-btn">Sort By...</div>
          </div>
        </div>
        <div className="row listmenu-head-hr">
          <div className="text-center col-12">
            <hr />
          </div>
        </div>
        <div className="row flex-column listmenu-body3">
          <div className="col-12">
            <div className="listmenu-body-btn listmenu-btn">
              Move All Cards in This List...
            </div>
            <div className="listmenu-body-btn listmenu-btn">
              Archive All Cards in This List...
            </div>
          </div>
        </div>
        <div className="row listmenu-head-hr">
          <div className="text-center col-12">
            <hr />
          </div>
        </div>
        <div className="row listmenu-tail">
          <div className="col-12">
            <div className="listmenu-btn">Archive This List</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ListMenu;

import React, { useEffect, useRef } from "react";
import "./ListMenu.css";

function ListMenu(props) {
  const { list, position, setOpenMenu } = props;
  const modalPosition = {
    top: `${position.clientY - 80}px`,
    left: `${
      window.innerWidth - position.clientX < 300
        ? position.clientX - (320 - window.innerWidth + position.clientX)
        : position.clientX
    }px`,
  };
  const listMenuRef = useRef(null);

  useEffect(() => {
    const closeMenu = (e) => {
      if (e.target !== listMenuRef) {
        setOpenMenu(false);
      }
    };
    window.addEventListener("mousedown", closeMenu);

    return () => {
      window.removeEventListener("mousedown", closeMenu);
    };
  }, []);

  return (
    <div className="ListMenu" ref={listMenuRef}>
      {console.log(list)}
      <div
        className="listmenu-container container d-flex flex-column py-3"
        style={modalPosition}
      >
        <div className="row listmenu-head">
          <div className="text-center col-12">List Actions</div>
          <div className="col-2 text-center listmenu-close-btn">
            <i className="fa fa-close" onClick={() => setOpenMenu(false)}></i>{" "}
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

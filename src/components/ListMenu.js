import React, { useEffect, useRef } from "react";
import "./ListMenu.css";
import Axios from "axios";

function ListMenu(props) {
  const { list, position, setOpenMenu, setLists, setIsLoading } = props;
  const listMenuWidth = 300;
  const modalPosition = {
    top: `${position.clientY - 80}px`,
    left: `${
      window.innerWidth - position.clientX < listMenuWidth
        ? position.clientX -
          (listMenuWidth + 16 - window.innerWidth + position.clientX)
        : position.clientX
    }px`,
  };
  const listMenuRef = useRef(null);

  useEffect(() => {
    const closeMenu = (e) => {
      if (!listMenuRef.current.contains(e.target)) {
        setOpenMenu(false);
      }
    };
    document.addEventListener("mousedown", closeMenu);

    return () => {
      document.removeEventListener("mousedown", closeMenu);
    };
  }, []);

  const archiveThisList = (_id) => {
    if (window.confirm("Do you really want to archive this list?")) {
      requestArchiveList(_id);
    }
  };

  const requestArchiveList = async (_id) => {
    setIsLoading(true);
    try {
      const res = await Axios.put(
        `https://trello-clone-ppm.herokuapp.com/list/${_id}/status/2`
      );
      console.log(res);
      updateUI(_id);
      setIsLoading(false);
    } catch (err) {
      console.log(err);
      setIsLoading(false);
    }
  };

  const updateUI = (_id) => {
    setLists((prevLists) => {
      return prevLists.filter((list) => list.id !== _id);
    });
  };

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
            <div
              className="listmenu-btn"
              //   onClick={(e) => archiveThisList(list.id, e.target)}
              onClick={() => archiveThisList(list.id)}
            >
              Archive This List
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ListMenu;

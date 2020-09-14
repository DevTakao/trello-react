import React, { useState, useEffect } from "react";
import TrelloCard from "./TrelloCard";
import ListMenu from "./ListMenu";
import "./TrelloList.css";
import Axios from "axios";

function TrelloList({ list, setLists, setIsLoading }) {
  const cards = list.cards || [];
  const [openMenu, setOpenMenu] = useState(false);
  const [clickPosition, setClickPosition] = useState({});
  const [listRenameInput, setListRenameInput] = useState(false);
  const [listRenameValue, setListRenameValue] = useState(list.title);

  const handleListRename = (e) => {
    e.preventDefault();
    requestListRename(listRenameValue);
    // console.log(listRenameValue);
    setListRenameInput(false);
  };

  const requestListRename = async (listName) => {
    setIsLoading(true);
    await Axios.put(`https://trello-clone-ppm.herokuapp.com/list/${list.id}`, {
      title: listName,
      position: list.position,
      status: 1,
    })
      .then((res) => {
        console.log(res);
        console.log("List Rename Successful!");
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
        setListRenameValue(list.title);
      });
  };

  return (
    <div
      className="card-list bg-dark pl-2 pr-2 py-2 mr-3 mb-2 align-self-start field-element"
      id="138"
    >
      <div className="list-head d-flex justify-content-between mx-1 pb-1">
        {listRenameInput ? (
          <form
            className="list-rename-form"
            onSubmit={(e) => handleListRename(e)}
          >
            <input
              className="list-rename-input"
              type="text"
              value={listRenameValue}
              onChange={(e) => setListRenameValue(e.target.value)}
              onFocus={(e) => e.target.select()}
              onBlur={() => {
                setListRenameInput(false);
                setListRenameValue(list.title);
              }}
              autoFocus
            ></input>
          </form>
        ) : (
          <h5 className="list-title" onClick={() => setListRenameInput(true)}>
            {listRenameValue}
          </h5>
        )}
        <span
          className="more-options-button small"
          onClick={(e) => {
            setOpenMenu(true);
            setClickPosition({ clientX: e.clientX, clientY: e.clientY });
          }}
        >
          •••
        </span>
      </div>
      <div className="list-body">
        {!!cards.length &&
          cards.map((card) => <TrelloCard key={card.id} card={card} />)}
      </div>
      <div className="list-tail mt-2 ml-1 d-flex flex-row justify-content-between">
        <span className="list-tail-btn add-card-btn flex-fill mr-1">
          <i className="fas fa-plus small" aria-hidden="true"></i> Add Another
          Card
        </span>
        <span className="list-tail-btn">
          <i className="fas fa-file-export small" aria-hidden="true"></i>
        </span>
      </div>
      {openMenu && (
        <ListMenu
          list={list}
          position={clickPosition}
          setOpenMenu={setOpenMenu}
          setLists={setLists}
          setIsLoading={setIsLoading}
        />
      )}
    </div>
  );
}

export default TrelloList;

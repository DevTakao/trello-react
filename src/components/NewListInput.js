import React, { useEffect, useRef, useState } from "react";
import "./NewListInput.css";
import Axios from "axios";

function NewListInput({
  setShowNewListInput,
  currentListCount,
  setLists,
  setIsLoading,
}) {
  const [newListInputValue, setNewListInputValue] = useState("");

  const NewListInputRef = useRef();
  useEffect(() => {
    const closeNewListInput = (e) => {
      if (!NewListInputRef.current.contains(e.target)) {
        setShowNewListInput(false);
      }
    };
    document.addEventListener("mousedown", closeNewListInput);

    return () => {
      document.removeEventListener("mousedown", closeNewListInput);
    };
  }, []);

  const addNewList = () => {
    if (validateInput(newListInputValue)) {
      requestNewList(newListInputValue, currentListCount);
    } else {
      alert("The input must not be empty.");
    }
  };

  const validateInput = (str) => {
    if (!!str.trim()) return true;
    return false;
  };

  const requestNewList = async (_title, _position) => {
    setIsLoading(true);
    await Axios.post("https://trello-clone-ppm.herokuapp.com/list", {
      title: _title,
      position: _position + 1,
      status: 1,
    })
      .then((res) => {
        console.log(res);
        setLists((prevState) => {
          return [...prevState, res.data];
        });
        setShowNewListInput(false);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false);
      });
  };

  return (
    <div
      className="align-self-start"
      style={{ borderRight: "16px solid transparent" }}
      id="newlist-field-wrapper"
      ref={NewListInputRef}
    >
      <div className="card-list text-dark px-2 py-1" id="newlist-field">
        <input
          type="text"
          name="newList"
          id="newListInput"
          value={newListInputValue}
          onChange={(e) => setNewListInputValue(e.target.value)}
          style={{ margin: "auto" }}
          autoFocus
        />
        <div className="d-flex flex-row mt-2 ml-1 py-1">
          <span
            className="newListAction list-tail-btn mr-2"
            onClick={addNewList}
          >
            Add List
          </span>
          <span
            className="newListAction list-tail-btn"
            onClick={() => setShowNewListInput(false)}
          >
            <i className="fa fa-close" aria-hidden="true"></i>
          </span>
        </div>
      </div>
    </div>
  );
}

export default NewListInput;

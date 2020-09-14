import React, { useState, useEffect } from "react";
import axios from "axios";
import TrelloList from "./TrelloList";
import "./DisplayArea.css";
import AddNewList from "./AddNewList";
import NewListInput from "./NewListInput";

function DisplayArea({ setIsLoading }) {
  const [lists, setLists] = useState([]);
  const [showNewListInput, setShowNewListInput] = useState(false);

  useEffect(() => {
    console.log("Lists Refreshed!");
    const fetchData = async () => {
      setIsLoading(true);
      await axios
        .get("https://trello-clone-ppm.herokuapp.com/list")
        .then((res) => {
          setLists(() => {
            return [...lists, ...res.data];
          });
          setIsLoading(false);
        })
        .catch((err) => {
          console.log(err);
          setLists([]);
          setIsLoading(false);
        });
    };
    fetchData();
  }, []);
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12">
          <div className="list-wrapper d-flex flex-row px-3">
            {!!lists.length &&
              lists.map(
                (list) =>
                  list.status === 1 && (
                    <TrelloList
                      key={list.id}
                      list={list}
                      setLists={setLists}
                      setIsLoading={setIsLoading}
                    />
                  )
              )}
            {!!lists.length &&
              (showNewListInput ? (
                <NewListInput
                  setShowNewListInput={setShowNewListInput}
                  currentListCount={lists.length}
                  setLists={setLists}
                  setIsLoading={setIsLoading}
                />
              ) : (
                <AddNewList setShowNewListInput={setShowNewListInput} />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default DisplayArea;

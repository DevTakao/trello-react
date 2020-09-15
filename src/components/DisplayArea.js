import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import TrelloList from "./TrelloList";
import "./DisplayArea.css";
import AddNewList from "./AddNewList";
import NewListInput from "./NewListInput";
import { UserLoading } from "../App";

function DisplayArea() {
  const { setIsLoading } = useContext(UserLoading);
  const [lists, setLists] = useState([]);
  const [showNewListInput, setShowNewListInput] = useState(false);

  useEffect(() => {
    console.log("Lists Refreshed!");
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const res = await axios.get(
          "https://trello-clone-ppm.herokuapp.com/list"
        );
        setLists(res.data);
        setIsLoading(false);
      } catch (err) {
        console.log(err);
        setLists([]);
        setIsLoading(false);
      }
    };
    fetchData();
  }, []);
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12">
          <div className="list-wrapper d-flex flex-row px-3">
            {lists &&
              lists.length > 0 &&
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
            {showNewListInput ? (
              <NewListInput
                setShowNewListInput={setShowNewListInput}
                currentListCount={lists.length}
                setLists={setLists}
                setIsLoading={setIsLoading}
              />
            ) : (
              <AddNewList setShowNewListInput={setShowNewListInput} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default DisplayArea;

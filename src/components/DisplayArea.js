import React, { useState, useEffect } from "react";
import axios from "axios";
import TrelloList from "./TrelloList";
import "./DisplayArea.css";
import AddNewList from "./AddNewList";

function DisplayArea({ setIsLoading }) {
  const [lists, setLists] = useState([]);

  useEffect(() => {
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
                  list.status === 1 && <TrelloList key={list.id} list={list} />
              )}
            {!!lists.length && <AddNewList />}
          </div>
        </div>
      </div>
    </div>
  );
}

export default DisplayArea;

import React, { useState } from "react";
import "./App.css";
import NavContainer from "./components/NavContainer";
import DisplayArea from "./components/DisplayArea";
import ListMenu from "./components/ListMenu";

export const UserLoading = React.createContext(false);

function App() {
  const [isLoading, setIsLoading] = useState(false);
  return (
    <div className="App">
      <UserLoading.Provider value={isLoading}>
        <NavContainer />
        <DisplayArea setIsLoading={setIsLoading} />
      </UserLoading.Provider>
      {/* <ListMenu /> */}
    </div>
  );
}

export default App;

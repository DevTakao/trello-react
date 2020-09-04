import React, { useState } from "react";
import "./App.css";
import NavContainer from "./components/NavContainer";
import DisplayArea from "./components/DisplayArea";

function App() {
  const [isLoading, setIsLoading] = useState(false);
  return (
    <div className="App">
      <NavContainer isLoading={isLoading} />
      <DisplayArea setIsLoading={setIsLoading} />
    </div>
  );
}

export default App;

import React, { useState } from "react";
import "./App.css";
import NavContainer from "./components/NavContainer";
import DisplayArea from "./components/DisplayArea";

export const UserLoading = React.createContext({
  isLoading: false,
  setIsLoading: () => {}
});

function App() {
  const [isLoading, setIsLoading] = useState(false);
  return (
    <div className="App">
      {/* Context Provider for Loading Animation */}
      <UserLoading.Provider value={{ isLoading, setIsLoading }}>
        <NavContainer />
        <DisplayArea />
      </UserLoading.Provider>
    </div>
  );
}

export default App;
